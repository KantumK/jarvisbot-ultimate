const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Affiche les commandes disponibles'),
  async execute(interaction) {
    await interaction.reply('Commande `help` exécutée !');
  }
};
