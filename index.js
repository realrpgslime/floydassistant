const Discord = require("discord.js")
require("dotenv").config()

const TOKEN ="OTI2NTc5NjcwMzU3NTQwODc0.Yc9ukA.w-yw3vhPPddQs-xLg8sNhHAwqvM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "stop resisting"){
        message.reply("I can't breathe!")
    }
})

client.login(TOKEN)