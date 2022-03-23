const Discord = require("discord.js")
require("dotenv").config()

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



/* BLM */
client.on("messageCreate", (message) => {
    if (message.content == "stop resisting"){
        message.reply("I can't breathe!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "do a flip"){
        message.reply("https://cdn.discordapp.com/emojis/929937750684205086.gif?size=240&quality=lossless")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "tuxedo || rap"){
        message.reply("https://c.tenor.com/5tJefIiRVfkAAAAd/blm-george-floyd.gif")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "wanna play"){
        message.reply("https://www.youtube.com/watch?v=q59vjFPwkN0")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "breathe || breath || oxygen || co2 || breathing || breatheless"){
        message.reply("https://www.youtube.com/watch?v=5Qn8zxhHs44")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "dollar || money"){
        message.reply("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExvcU8AmdSTj6VOWvQd8naAREvegdxECk4g&usqp=CAU")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "dance"){
        message.reply("https://c.tenor.com/rK4ICxQnBYgAAAAd/george-floyd-dance.gif")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "floyd what about our generation || generation"){
        message.reply("https://www.youtube.com/watch?v=1f7i1HIm7-g")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;

    if (message.mentions.has(client.user.id)) {
        message.channel.send("Hello there! https://cdn.discordapp.com/emojis/929937750684205086.gif?size=240&quality=lossless");
    }
});





/* voicify */
client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    if (newVoiceState.channel) { // The member connected to a channel.
        console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
        client.channels.cache.get("955411238383390730").send('has started breathing');
    } else if (oldVoiceState.channel) { // The member disconnected from a channel.
        console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`);
        client.channels.cache.get("955411238383390730").send('has stopped breathing');
    };
});




client.login(process.env.TOKEN)
