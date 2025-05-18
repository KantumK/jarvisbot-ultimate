const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Supprime des messages'),
  async execute(interaction) {
    await interaction.reply('Commande `clear` exécutée !');
  }
};
