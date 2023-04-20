const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

if(!message.member.roles.cache.some(r => ["905630791118233602", "905630791118233602"].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
 
 let kullanıcı = message.mentions.users.first()
    
 //PROJENİN SAHİBİ GRAVİTY#2566
if(!kullanıcı) {
//PROJENİN SAHİBİ GRAVİTY#2566
let özel = db.fetch(`yetkili.${message.author.id}.özel`);
let tagrol = db.fetch(`yetkili.${message.author.id}.tagrol`);
let vip1 = db.fetch(`yetkili.${message.author.id}.vip1`);
let erkek1 = db.fetch(`yetkili.${message.author.id}.erkek1`);
let kadin1 = db.fetch(`yetkili.${message.author.id}.kadin1`);
let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`); 
if(vip1 === null) vip1 = "0"
if(vip1 === undefined) vip1 = "0"
if(özel === null) özel = "0"
if(özel === undefined) özel = "0"
if(tagrol === null) tagrol = "0"
if(tagrol === undefined) tagrol = "0"
if(erkek1 === null) erkek1 = "0"
if(erkek1 === undefined) erkek1 = "0"
if(kadin1 === null) kadin1 = "0"
if(kadin1 === undefined) kadin1 = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.addField(`<:Onay:1049777947013300354> Toplam Kayıtların:`, `\`${kayıtlar}\``)
.addField(`<:Onay:1049777947013300354> Toplam Erkek Kayıtların:`, `\`${erkek1}\``)
.addField(`<:Onay:1049777947013300354> Toplam Kadın Kayıtların:`, `\`${kadin1}\``)
.addField(`<:Onay:1049777947013300354> Toplam Vip Kayıtların:`, `\`${vip1}\``)
.addField(`<:Onay:1049777947013300354> Toplam Özel Üye Kayıtların:`, `\`${özel}\``)
.addField(`<:Onay:1049777947013300354> Toplam Tag Kayıtların:`, `\`${tagrol}\``)
.setColor('AQUA')
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let erkek1 = db.fetch(`yetkili.${kullanıcı.id}.erkek`);
let özel = db.fetch(`yetkili.${message.author.id}.özel1`);
let tagrol = db.fetch(`yetkili.${message.author.id}.tagüye`);
let vip1 = db.fetch(`yetkili.${message.author.id}.vip1`);
let kadin1 = db.fetch(`yetkili.${kullanıcı.id}.kadin1`);
let kayıtlar1 = db.fetch(`yetkili.${kullanıcı.id}.toplam`); 
if(erkek1 === null) erkek1 = "0"
if(vip1 === null) vip1 = "0"
if(vip1 === undefined) vip1 = "0"
if(özel1 === null) özel = "0"
if(özel1 === undefined) özel = "0"
if(tagrol === null) tagrol = "0"
if(tagrol === undefined) tagrol = "0"
if(erkek1 === undefined) erkek1 = "0"
if(kadin1 === null) kadin1 = "0"
if(kadin1 === undefined) kadin1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  //PROJENİN SAHİBİ GRAVİTY#2566
const sorgu2 = new MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı}`)
.addField(`<:Onay:1049777947013300354> Toplam Kayıtların:`, `${kayıtlar1}`)
.addField(`<:Onay:1049777947013300354> Toplam Kadın Kayıtların:`, `\`${erkek1}\``)
.addField(`<:Onay:1049777947013300354> Toplam Kadın Kayıtların:`, `\`${vip1}\``)
.addField(`<:Onay:1049777947013300354> Toplam Erkek Kayıtların:`, `\`${kadin1}\``)
.addField(`<:Onay:1049777947013300354> Toplam Tag Kayıtların:`, `\`${tagrol}\``)
.addField(`<:Onay:1049777947013300354> Toplam Özel Üye Kayıtların:`, `\`${özel1}\``)
.setColor('AQUA')
 return message.channel.send(sorgu2)
  
};//PROJENİN SAHİBİ GRAVİTY#2566
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıt-kontrol"],
    permLvl: 2,
}
  
exports.help = {  
  name: "stat"
}