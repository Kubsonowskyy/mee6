const Discord = require(`discord.js`)
const bot = new Discord.Client();
const prefix = "!"
var nazwabota = "MEE6+"
const token = `NzE0MDU2NTI1MDM1MDc3NjUz.XspJtQ.41-SUkiDRVjJPwThJZgsm_tLVJI`;

bot.on(`ready`, ()=>{
    console.log(`Bot ${nazwabota} został włączony z tokenu: ${token}`);
    
})

bot.on("message", async message => {
    if (message.author.bot) return;
 
    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()
});     
bot.login(token);
