const Discord = require("discord.js")
const bot = new Discord.Client()
var prefix = ("!")


bot.on("message", message => {
    if(message.content === prefix + "salut")
    message.reply("Salut toi ! ")
})

bot.login("Votre token ici")
