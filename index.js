const Discord = require("discord.js")
require("dotenv").config()

const TOKEN ="OTI2NTc5NjcwMzU3NTQwODc0.Yc9ukA.cLBbwvd7FFKv6xnA0kMfxaOTn7k"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_PRESENCES",
        "GUILD_VOICE_STATES"
    ]
})

const channel = client.channels.cache.get('950319389851385860')

const textchannel = client.channels.cache.get('955411238383390730') || client.channels.fetch('955411238383390730');



client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('ready', () => {
    const chan = client.channels.cache.get("950319389851385860");
    console.log(chan);
});

client.on("messageCreate", (message) => {
    if (message.content == "stop resisting"){
        message.reply("I can't breathe!")
    }
})


client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    if (newVoiceState.channel) { // The member connected to a channel.
        console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
        client.channels.cache.get("955411238383390730").send('has started breathing');
    } else if (oldVoiceState.channel) { // The member disconnected from a channel.
        console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`);
        client.channels.cache.get("955411238383390730").send('has stopped breathing');
    };
});

client.login(TOKEN)