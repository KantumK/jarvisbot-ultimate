
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription("Supprime des messages")
    .addIntegerOption(option =>
      option.setName('amount')
        .setDescription('Nombre de messages à supprimer')
        .setRequired(true)),
  async execute(interaction) {
    const amount = interaction.options.getInteger('amount');
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      return interaction.reply({ content: '🚫 Permission refusée.', ephemeral: true });
    }

    await interaction.channel.bulkDelete(amount, true);
    await interaction.reply({ content: `🧹 ${amount} messages supprimés.`, ephemeral: true });
  },
};