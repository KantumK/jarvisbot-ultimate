
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription("Affiche la liste des commandes disponibles"),
  async execute(interaction) {
    await interaction.reply("📜 Commandes disponibles : /ping, /userinfo, /gameinfo, /serverinfo, /avatar, /clear, /ban, /kick, /invite");
  },
};