const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
if (message.content.startsWith(prefix + "bc")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;let args = message.content.split(" ").slice(1);
  
  
