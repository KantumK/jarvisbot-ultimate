const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("trending")
    .setDescription("Affiche les tendances"),
  async execute(interaction) {
    await interaction.reply("Commande `trending` exécutée !");
  }
};
