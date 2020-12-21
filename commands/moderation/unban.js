const Discord = require('discord.js');
module.exports = {
    name: 'unban',
    description: 'unban ppl',
    cooldown: 1,
    cd: "Chill on the unbans",
    execute(message, args, d) {
        let unbanUser = args[0];
        let boolean = message.member.hasPermission("BAN_MEMBERS");
        let myBoolean = message.guild.me.hasPermission("BAN_MEMBERS");
        if (message.mentions.members.first()) { return message.channel.send('Bruh you gotta give me an id to unban'); }
        if (boolean && myBoolean) {
            if (unbanUser) {
                if (message.author.id === unbanUser) {
                    return message.channel.send('I don\'t think ur banned');
                }
                if (message.client.user.id === unbanUser) {
                    return message.channel.send('Bruh im not banned')
                }
                try {
                    message.guild.members.unban(unbanUser)
                    message.channel.send("User unbanned!");
                } catch {
                    message.channel.send("I don't got permissions (or high enough role) to unban ppl. How about ya give me it?")
                }
            }
        } else if (!unbanUser) {
            message.channel.send('Air was unbanned. (you gotta give me their id)');
        } else if (!boolean) {
            message.reply("The microwave said no.");
        } else if (!myBoolean) {
            message.channel.send("Perms=no")
        } else {
            message.channel.send("I tried but Thier too powerful.");
        }

    }
};
