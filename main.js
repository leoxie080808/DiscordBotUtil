const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');
const { createInterface } = require('readline');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}





client.once('ready', () => {
    console.log('util is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
       createInterface.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/codelyon');
    }
});









client.login('NzM5NzA4NzI1NTM0OTE2NzI4.XyeZbw.2G5qItJyJAE436LxqxHh_uTSCOM');
