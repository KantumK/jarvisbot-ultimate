const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Expulse un utilisateur"),
  async execute(interaction) {
    await interaction.reply("Commande `kick` exécutée !");
  }
};
