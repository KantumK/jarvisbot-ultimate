const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("activity-indicator")
    .setDescription("Indique l'activité du bot"),
  async execute(interaction) {
    await interaction.reply("Commande `activity-indicator` exécutée !");
  }
};
