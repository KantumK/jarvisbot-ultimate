const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Affiche la file de musique'),
  async execute(interaction) {
    await interaction.reply('Commande `queue` exécutée !');
  }
};
