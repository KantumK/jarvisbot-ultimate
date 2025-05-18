
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription("Affiche les infos d’un utilisateur"),
  async execute(interaction) {
    const user = interaction.user;
    await interaction.reply(`👤 Utilisateur : ${user.username}\n🆔 ID : ${user.id}`);
  },
};