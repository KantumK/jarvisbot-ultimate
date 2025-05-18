const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Arrête la musique"),
  async execute(interaction) {
    await interaction.reply("Commande `stop` exécutée !");
  }
};
