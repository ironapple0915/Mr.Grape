module.exports = {
	name: 'invite',
	description: 'get invite link for the bot',
	cooldown: 2,
	cd: "I just gave you the link!",
	execute(message, args, d) {
		const invite = 'https://discord.com/oauth2/authorize?client_id=747292356847468704&scope=bot&permissions=2147352575';
		const inviteEmbed = new d.Discord.MessageEmbed()
			.setColor('ramdom')
			.setTitle('bot invite')
			.setURL(invite)
			 .setDescription('server invite - https://discord.gg/ZVyzbZfUqr')
			.setTimestamp()
            		.setFooter('Night');
		message.channel.send(inviteEmbed);
	}
};
