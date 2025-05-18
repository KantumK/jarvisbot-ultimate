
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription("Génère un lien d’invitation au bot"),
  async execute(interaction) {
    const invite = `https://discord.com/api/oauth2/authorize?client_id=${interaction.client.user.id}&permissions=8&scope=bot%20applications.commands`;
    await interaction.reply(`🔗 Invitation : ${invite}`);
  },
};