const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("Rend muet un utilisateur"),
  async execute(interaction) {
    await interaction.reply("Commande `mute` exécutée !");
  }
};
