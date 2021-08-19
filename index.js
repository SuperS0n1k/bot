const http = require('http');
const express = require('express');
const app = express();
var server = require('http').createServer(app);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

var coinFlipCommand = function(message){
  var coinside = Math.floor(Math.random()*2);
  if(coinside === 1){
    message.channel.send("Your coin landed on Tails!");
  }
  else{
    message.channel.send("Your coin landed on Heads!");
  }
};

client.on('message', message => {
  console.log("\"" + message + "\" has been posted by " + message.author.username);
  var Message = message.toString();
  if(Message.startsWith("!")){
    var fullCmd = Message.slice(1);
    if(fullCmd.startsWith("flip")){
       coinFlipCommand(message);
    }
  }
});
client.on('ready', () => {
  console.log(client.user.username + " is ready!");
});
client.login(process.env.TOKEN);
