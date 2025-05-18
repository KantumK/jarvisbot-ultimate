
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription("Kick un utilisateur")
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Utilisateur à kick')
        .setRequired(true)),
  async execute(interaction) {
    const target = interaction.options.getUser('target');
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      return interaction.reply({ content: '🚫 Permission refusée.', ephemeral: true });
    }

    const member = interaction.guild.members.cache.get(target.id);
    if (member) {
      await member.kick();
      await interaction.reply(`👢 ${target.username} a été kické.`);
    } else {
      await interaction.reply('❌ Utilisateur non trouvé.');
    }
  },
};