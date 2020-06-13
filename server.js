const Discord=require('discord.js')
require('dotenv').config();
const client=new Discord.Client()

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}!`)
})

const prefix = process.env.PREFIX;
client.login(prefix)


client.on('guildMemberAdd',(member)=>{
    const channel=member.guild.channels.cache.find((ch)=>{
        return ch.name==='member-log'
    })
    if(!channel)
    {
        return;
    }
    channel.send(`Welcome to our very own virtual Old Trafford, ${member}`)
})


client.on('message',msg=>{
    if(msg.content==='Glory Glory')
    {
        msg.reply('Man United')    
    }
})
