const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gameinfo")
    .setDescription("Donne des infos sur un jeu"),
  async execute(interaction) {
    await interaction.reply("Commande `gameinfo` exécutée !");
  }
};
