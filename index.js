const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/EXCuvNd")) {
    
  message.author.send('https://discord.gg/vM9hJSemvm ت ت دانرا تۆش ڕیکلامەکە بکە`) //
    
  client.channels.get("755636700482633791").send(
`> <:ARBELE_UPUP:791411050238836766> By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ریکلام مەکە بۆ من بنێرە `) 
});




client.login("ODAxMTEzNjU2NTI3ODE0Njc3.YAb9Ow.3pGPN9nXDq_LclVLByY1ZkvgQWQ");//تۆکین لێرە دانێ
