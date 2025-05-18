const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Joue une musique"),
  async execute(interaction) {
    await interaction.reply("Commande `play` exécutée !");
  }
};
