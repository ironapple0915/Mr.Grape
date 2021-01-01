const Discord = require('ms');
module.exports = {
    name: 'mute',
    description: 'Mutes a user',
    cooldown: 0,
    
const mutedRole = message.guild.roles.cache.get('<Muted Role ID>');

// or, if you can't get the id:
const mutedRole = message.guild.roles.cache.find(
 (role) => role.name === 'Muted'
);

// if there is no `Muted` role, send an error
if (!mutedRole)
 return message.channel.send('There is no Muted role on this server');
     setTimeout(() => {
  target.roles.remove(mutedRole); // remove the role
}, ms(args[1])) 
};

