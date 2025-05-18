const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("matchmaking")
    .setDescription("Recherche un match/joueur"),
  async execute(interaction) {
    await interaction.reply("Commande `matchmaking` exécutée !");
  }
};
