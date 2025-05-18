const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Supprime plusieurs messages"),
  async execute(interaction) {
    await interaction.reply("Commande `purge` exécutée !");
  }
};
