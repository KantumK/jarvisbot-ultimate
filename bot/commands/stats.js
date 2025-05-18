const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Affiche des stats du bot"),
  async execute(interaction) {
    await interaction.reply("Commande `stats` exécutée !");
  }
};
