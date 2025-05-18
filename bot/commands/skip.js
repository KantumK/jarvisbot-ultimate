const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("Passe à la musique suivante"),
  async execute(interaction) {
    await interaction.reply("Commande `skip` exécutée !");
  }
};
