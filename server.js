const Discord=require('discord.js')
require('dotenv').config();
const { Client, MessageAttachment } = require('discord.js');

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
    channel.send(`Welcome to our very own virtual Old Trafford, ${member} \n Enter GGMU for more info`)
})


client.on('message',msg=>{
    if(msg.content==='GGMU')
    {
        msg.reply('Enter 1 for Oles at the wheel \n Enter 2 for We Shall not be moved\n Enter 3 for Hello Hello\n Enter 4 for U N I T E D\n Enter 5 for Bruno Bruno Bruno\n Enter 6 for 20 Times')
    }
})


client.on('message',msg=>{
        if(msg.content==='1'){
                const attachment=new MessageAttachment('./chants/Oles_at_the_wheel.mp3');
                msg.reply(attachment)
        }
        else if(msg.content==='2'){
            const attachment=new MessageAttachment('./chants/we-shall-not-be-moved.mp3');
            msg.reply(attachment)
        }
        else if(msg.content==='3'){
            const attachment=new MessageAttachment('./chants/hello-hello.mp3');
            msg.reply(attachment)
        }
        else if(msg.content==='4'){
            const attachment=new MessageAttachment('./chants/united.mp3');
            msg.reply(attachment)
        }
        else if(msg.content==='5'){
            const attachment=new MessageAttachment('./chants/bruno.mp3');
            msg.reply(attachment)
        }
        else if(msg.content==='6'){
            const attachment=new MessageAttachment('./chants/20times.mp3');
            msg.reply(attachment)
        }
        else{
            msg.reply('Please give me a valid offer!')
        }
})
