const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", function(user) {
  let embed = new Discord.RichEmbed()
    .setTitle("Welcome to ")
    .setThumbnail()

    .setDescription(`
      
**Thank you for joining us! Enjoy your stay, and have a wonderful time!**


Please check out...

♪ - <#746395598894268547> 

To get yourself started !`)
    .setImage("https://cdn.discordapp.com/attachments/405817866399776768/701564502394536005/welcome.jpg")
    .setFooter("https://cdn.discordapp.com/attachments/405817866399776768/701564502394536005/welcome.jpg","Coded by zakaria")
    .setThumbnail(client.user.displayAvatarURL
);
  user.guild.channels.get("750349078445031533").send(embed);
  
});

client.on("ready", () => {
  const channel = client.channels.get("750349078445031533");
  if (!channel) return console.error("The channel does not exist!");
  channel
    .join()
    .then(connection => {
      // ila tl3o lk f console hd ktba 3rf 5dam
      console.log("Successfully connected.");
    })
    .catch(e => {
      // error
      console.error(e);
      return;
    });
});
client.login(process.env.TOKEN);
