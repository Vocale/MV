const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on("message", (message) =>{
    if(message.content == "$join"){
        var id_canale = bot.channels.cache.get("821056120188698659");
        id_canale.send('Comando eseguito');
        //message.channel.send('Comando eseguito');
    }
    if(message.content == "$time"){
        var data = new Date();
        var ore = data.getHours();
        var minuti = data.getMinutes();

        message.channel.send("Ora attuale :alarm_clock: " + ore + ":" + minuti);
    }
});