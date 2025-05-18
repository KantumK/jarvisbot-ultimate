const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Génère le lien d'invitation"),
  async execute(interaction) {
    await interaction.reply("Commande `invite` exécutée !");
  }
};
