const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Infos sur un utilisateur'),
  async execute(interaction) {
    await interaction.reply('Commande `userinfo` exécutée !');
  }
};
