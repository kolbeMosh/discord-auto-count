/*  Disclaimer Use of this bot is at your own risk

    This bot is just a personal project and violates Discord's TOS
*/

const { Client } = require('discord.js-selfbot-v13');
const settings = require('./settings.json')

const client = new Client({checkUpdate: false});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async (msg) => {
    if (msg.author.id != client.user.id && msg.guild.name === settings.serverName){
        let num = Number(msg.content);
        if (!isNaN(msg.content)){
            let num = parseInt(msg.content);
            num++;
            msg.reply(`${num}`);
        }else {
            console.log("NaN")
        }
    }else {
        console.log("Message not in the right server")
    }
})


client.login(settings.token);