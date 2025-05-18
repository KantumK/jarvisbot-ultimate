const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('matchmaking')
    .setDescription('🔍 Lance un matchmaking entre membres.'),
  async execute(interaction) {
    await interaction.reply('⏳ Recherche d'un partenaire de jeu en cours...');
  },
};