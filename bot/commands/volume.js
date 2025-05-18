const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('volume')
    .setDescription('Change le volume'),
  async execute(interaction) {
    await interaction.reply('Commande `volume` exécutée !');
  }
};
