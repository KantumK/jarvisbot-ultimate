
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription("Donne des infos sur le serveur"),
  async execute(interaction) {
    const { guild } = interaction;
    await interaction.reply(`🌐 Nom : ${guild.name}\n👥 Membres : ${guild.memberCount}`);
  },
};