const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bannir un utilisateur'),
  async execute(interaction) {
    await interaction.reply('Commande `ban` exécutée !');
  }
};
