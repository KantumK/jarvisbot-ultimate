const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('freegames')
    .setDescription('Affiche les jeux gratuits'),
  async execute(interaction) {
    await interaction.reply('Commande `freegames` exécutée !');
  }
};
