const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('🎵 Joue une musique depuis YouTube.')
    .addStringOption(option => option.setName('url').setDescription('URL de la vidéo').setRequired(true)),
  async execute(interaction) {
    await interaction.reply('🎶 Lecture en cours... (fonctionnalité audio en développement)');
  },
};