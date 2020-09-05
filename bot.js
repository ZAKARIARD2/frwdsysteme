const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const Discord = require("discord.js");
const moment = require("moment");


 

//status
var used1 = false;

var version = "1.0.0";
client.on("ready", () => {
  console.log("Ch3ltini hh" + version);
  client.user.setStatus("idle").catch(console.error);
  setInterval(() => {
    if (used1) {
      client.user.setActivity("Coded by zakaria.", {
        type: "playing"
      });
      used1 = false;
    } else {
      client.user.setActivity(`#VAREONTOP`, {
        type: "watching"
      });
      used1 = true;
    }
  }, 5000);
});





  client.on('guildMemberAdd', member => {
    const welcomer =  member.guild.channels.find('name', '・︱welcome');
   if(!welcomer) return;
     if(welcomer) {
        moment.locale('en');
        var m = member.user;
       let yumz = new Discord.RichEmbed()
       .setColor('#1968650')
       .setAuthor(`${m.tag}`, m.avatarURL)
       .setThumbnail(m.avatarURL)
       .setDescription(`**WELCOME <@${m.id}> To Official Server Of Team Vare Make sure to read the <#746395598894268547 > ** \n > **Joined Discord at :** \n** ${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} ** **\n** \`${moment(member.user.createdAt).fromNow()}\``)        
       .setImage("https://cdn.discordapp.com/attachments/751538929651417178/751552594966741033/WELCOME_DISCORD.jpg")
       .setFooter('Coded by zakaria');
    welcomer.send({embed:yumz});          
     }
    });
client.login(process.env.TOKEN);
