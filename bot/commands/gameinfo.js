
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gameinfo')
    .setDescription("Fournit des infos sur un jeu"),
  async execute(interaction) {
    await interaction.reply("🎮 Cette commande est en développement. Bientôt disponible !");
  },
};