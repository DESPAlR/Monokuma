const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Despair') {
    msg.reply('Pupupupu!');
  }
});

client.on('message', msg => {
  if (msg.content === 'despair') {
    msg.reply('Pupupupu!');
  }
});

client.login('MzMxMDEwOTEwMTkxNzQ3MDcz.DDqFig.nxqJ2riM7FjGOHuxGRTP7VPwPek');