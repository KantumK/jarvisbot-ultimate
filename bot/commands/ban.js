
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription("Bannit un utilisateur")
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Utilisateur à bannir')
        .setRequired(true)),
  async execute(interaction) {
    const target = interaction.options.getUser('target');
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return interaction.reply({ content: '🚫 Permission refusée.', ephemeral: true });
    }

    const member = interaction.guild.members.cache.get(target.id);
    if (member) {
      await member.ban();
      await interaction.reply(`🔨 ${target.username} a été banni.`);
    } else {
      await interaction.reply('❌ Utilisateur non trouvé.');
    }
  },
};