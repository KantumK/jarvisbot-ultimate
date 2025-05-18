const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();

// Création du client Discord avec les intentions nécessaires
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

// 🔁 Chargement dynamique des commandes depuis jarvisbot_commands/commands
const commandsPath = path.join(__dirname, 'jarvisbot_commands', 'commands');
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

// ✅ Prêt
client.once('ready', () => {
  console.log(`✅ JarvisBot connecté en tant que ${client.user.tag}`);
});

// 📡 Gestion des commandes
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) {
    console.error(`Commande ${interaction.commandName} introuvable.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Erreur lors de l'exécution de ${interaction.commandName}:`, error);
    await interaction.reply({ content: '❌ Une erreur est survenue.', ephemeral: true });
  }
});

// 🔐 Connexion avec le token du .env
client.login(process.env.TOKEN);

