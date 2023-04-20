const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = async(client, message, member, args) => {
let gold = await db.fetch(`gold_${message.member.id}`)
let user = message.mentions.users.first() || message.author;
  const yardimlistesi2 = new Discord.MessageEmbed()
  .setColor('AQUA')
  .setThumbnail('', client.user.avatarURL({dynamic: true}))
  .setAuthor('~ 𝚆𝚊𝚒𝚏 : #𝙶𝚊𝚖𝚒𝚗𝚐 ™')
  .setDescription(`
  > **Merhaba <@${message.author.id}> kullanıcım.**
  > **Benim Prefixim: ${prefix}**
  > **Benim Dilim: Türkçe**

  >  ** Yardım Komutları**
  > <:yildiz:990418884135907398>  ➤ [${prefix}erkek/kız/vip/özelüye/tag <kullanıcı> <isim> <yaş>](https://discord.gg/9gWgbC8mS8) > • **Belirtilen Kullanıcıyı Kayıt Edersiniz.**  
  > <:yildiz:990418884135907398>  ➤ [${prefix}stat](https://discord.gg/9gWgbC8mS8) > • **Etiketlediğin & Kendi Kayıtların Hakkında Bilgi Verir.**  
  > <:yildiz:990418884135907398>  ➤ [${prefix}topteyit](https://discord.gg/9gWgbC8mS8) > • ** Toplam Teyit Sıralamasını Gösterir.**  
  > <:yildiz:990418884135907398>  ➤ [${prefix}kayıtsız](https://discord.gg/9gWgbC8mS8) > • ** Etiketlediğin Kullanıcıyı Kayıtsıza Atar.**
  > <:yildiz:990418884135907398>  ➤ [${prefix}kayıt-sıfırla](https://discord.gg/9gWgbC8mS8) > • ** Kayıt Stats'ları Sıfırlanır.**  
  > <:yildiz:990418884135907398>  ➤ [${prefix}isimler @Uye](https://discord.gg/9gWgbC8mS8) > • ** Kullanıcının İsimlerini Gösterir.**  
  > <:yildiz:990418884135907398>  ➤ [${prefix}istatistik ](https://discord.gg/9gWgbC8mS8) > •** Botun İstatistiklerini Gösterir.**
  
  
  > ** <:yildiz:990418884135907398>  ➤ Linkler -->**
  > • [Destek Sunucum](https://discord.gg/9gWgbC8mS8) 
  
  `)
  .setFooter(`~ 𝚆𝚊𝚒𝚏 : #𝙶𝚊𝚖𝚒𝚗𝚐 ™`)
  .setTimestamp()
  .setImage('https://cdn.discordapp.com/attachments/1036730684477296660/1039981091051814982/standard_5.gif')
  message.channel.send(yardimlistesi2);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-menüsü', 'yardım-listesi'],
  permLevel: 0
}

exports.help = {
  name: 'yardım',
  description: 'Yardım listesini gösterir.',
  usage: 'yardım'
}//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566//PROJENİN SAHİBİ GRAVİTY#2566