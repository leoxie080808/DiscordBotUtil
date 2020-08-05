//inits 
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

//turns bot online 
client.once('ready', () => {
    console.log('util is online');
});


//attachment download
const http = require('https');
const https = require('https');

const request = require('request');
//create an empty file where the data can be saved 
let file = fs.createWriteStream('file.jpg');

/*await new Promise((resolve, reject)) => {
    let stream = request({
        
    })
}
*/






var download = function(url, dest){
    var file = fs.createWriteStream(dest);
    var request = http.get(url, function(response){
        response.pipe(file);
        file.on('finish', function(){
            //file.close(cb);
        });
    }).on('error', function(err){
       fs.unlink(est);
    });
};









//here, when util is online
client.on('message', message =>{
   // if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    var Attachment = (message.attachments).array();
    console.log(Attachment[0].url);

    download(Attachment[0].url, "test.jpeg");


    if(command === 'ping'){
       createInterface.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        //message.channel.send();
    }
});









client.login('NzM5NzA4NzI1NTM0OTE2NzI4.XyeZbw.Hjr3YXv7FRgge-EqoPhtzaAUcys');