const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('freegames')
    .setDescription('🎁 Annonce les jeux gratuits de la semaine.'),
  async execute(interaction) {
    await interaction.reply('🎉 Cette semaine, les jeux gratuits sont listés ici : [EPIC STORE]');
  },
};