const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Avertit un utilisateur"),
  async execute(interaction) {
    await interaction.reply("Commande `warn` exécutée !");
  }
};
