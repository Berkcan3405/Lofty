const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
 .addField(`<:Darklight:1048936001218822185> »  Pingim` ,`${client.ws.ping}ms`,true)
 .addField(`<:Darklight:1048936001218822185> » Yapımcım` ,`**Ｂｅｒｋｃａｎ#1907**`,true)
 .addField(`<:Darklight:1048936001218822185> » Node.js`, `${process.version}`, true)
 .addField(`<:Darklight:1048936001218822185> » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`<:Darklight:1048936001218822185> » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`<:Darklight:1048936001218822185> » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`<:Darklight:1048936001218822185> » Linkler`, `[Destek Sunucusu](https://discord.gg/9gWgbC8mS8) | [Youtube](https://www.youtube.com/channel/UClOAkCyDBYvI62QN-sBRZZg)`, true)
 .setAuthor(message.guild.name, message.guild.iconURL)
.setImage('https://cdn.discordapp.com/attachments/1036730684477296660/1039981091051814982/standard_5.gif')
  message.channel.send(istatistikler)
  //PROJENİN SAHİBİ GRAVİTY#2566
  
}//PROJENİN SAHİBİ GRAVİTY#2566
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 