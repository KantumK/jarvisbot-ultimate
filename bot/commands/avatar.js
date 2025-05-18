
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("Affiche l’avatar d’un utilisateur"),
  async execute(interaction) {
    const user = interaction.user;
    await interaction.reply(user.displayAvatarURL({ dynamic: true }));
  },
};