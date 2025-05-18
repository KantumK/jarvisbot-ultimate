const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

// 🔁 Chargement dynamique des commandes
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.warn(`[⚠️] Commande invalide dans ${filePath}`);
  }
}

client.once('ready', async () => {
  console.log(`✅ JarvisBot connecté en tant que ${client.user.tag}`);

  // Enregistrement des slash commands
  const commands = [];

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    if (command.data) {
      commands.push({
        name: command.data.name,
        description: command.data.description,
        options: command.data.options || [],
      });
    }
  }

  try {
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    if (guild) {
      await guild.commands.set(commands);
      console.log("✅ Commandes slash enregistrées sur le serveur !");
    } else {
      console.log("❌ GUILD_ID introuvable ou bot non connecté au serveur.");
    }
  } catch (error) {
    console.error("❌ Erreur d'enregistrement des commandes :", error);
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`❌ Erreur sur la commande ${interaction.commandName}`, error);
    await interaction.reply({ content: '❌ Une erreur est survenue.', ephemeral: true });
  }
});

client.login(process.env.TOKEN);
