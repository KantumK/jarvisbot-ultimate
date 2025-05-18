const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Met la musique en pause"),
  async execute(interaction) {
    await interaction.reply("Commande `pause` exécutée !");
  }
};
