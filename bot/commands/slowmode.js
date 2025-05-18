const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slowmode")
    .setDescription("Active le slowmode"),
  async execute(interaction) {
    await interaction.reply("Commande `slowmode` exécutée !");
  }
};
