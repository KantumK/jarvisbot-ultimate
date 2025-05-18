const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Affiche l'avatar d'un utilisateur"),
  async execute(interaction) {
    await interaction.reply("Commande `avatar` exécutée !");
  }
};
