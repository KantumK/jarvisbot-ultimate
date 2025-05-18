const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lock")
    .setDescription("Verrouille un salon"),
  async execute(interaction) {
    await interaction.reply("Commande `lock` exécutée !");
  }
};
