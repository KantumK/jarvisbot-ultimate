const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Infos sur le serveur'),
  async execute(interaction) {
    await interaction.reply('Commande `serverinfo` exécutée !');
  }
};
