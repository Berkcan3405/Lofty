const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['829771523048996884'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()                           
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
message.delete()
  
const tag = ''   
const erkekrol = message.guild.roles.cache.find(r => r.id === '905630928724963378') //erkek rol id
const erkekrol2 = message.guild.roles.cache.find(r => r.id === '953428670712799262')//erkek rol 2 id
const kadinrol = message.guild.roles.cache.find(r => r.id == '') 
const kadinrol2 = message.guild.roles.cache.find(r => r.id == '') 
const kayıtsız = message.guild.roles.cache.find(r => r.id === '939280341343023134')//kayıtsız id
const genelchat = message.guild.channels.cache.find(c => c.id === '10420944643295806054')//genelchat id
const savelog = message.guild.channels.cache.find(c => c.id === '990537693685501962')//savelog

if(!erkekrol) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`1. Erkek rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!erkekrol2) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`2. Erkek rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!kayıtsız) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kayıtsız rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bir kullanıcı belirt.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

let name = args[1]
let age = Number(args[2])


if(!name) return message.channel.send(new MessageEmbed()

.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir isim belirtmelisin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));

if(!age) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir yaş belirtmelisin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kendini kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bot kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Sunucu sahibini kayıt edemezsin.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('AQUA')).then(x => x.delete({timeout: 5000}));
  
  //PROJENİN SAHİBİ GRAVİTY#2566
datab.add(`yetkili.${message.author.id}.erkek1`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`ℭ ${tag} ${name} [${age}]`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.remove(kadinrol) //PROJENİN SAHİBİ GRAVİTY#2566
member.roles.remove(kadinrol2)                    
member.roles.remove(kayıtsız)


message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`
<:yildiz:990418884135907398>  • ⊱ ${member}, Ｅrkek / Üye

<:yildiz:990418884135907398>  • ⁑ ${message.author}, Ｋayıt / Ｅtti

<:yildiz:990418884135907398>  • ♓︎ ${erkekrol}, Ｒoller / ${erkekrol2}, Ｒoller 2

<:yildiz:990418884135907398>  • ------------------------------

<:yildiz:990418884135907398>  • ❃ \`ℭ ${tag} ${name} [${age}]\`

<:yildiz:990418884135907398>  • ✵ Ｔ𝚘𝚙𝚕𝚊𝚖: Ｋ𝚊𝚢𝚒𝚝𝚕𝚊𝚛𝚒𝚗【${alldata}】

<:yildiz:990418884135907398>  • ✵ Tarih: ${moment(Date.now()).format("DD MMM YYYY")}\``) 
.setColor('AQUA'))
  
savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`
<:yildiz:990418884135907398>  • Ｙetkili: ${message.author} | \`${message.author.id}\`
<:yildiz:990418884135907398>  • Ｋullanıcı: ${member} | \`${member.id}\`
<:yildiz:990418884135907398>  • Ｒoller: ${erkekrol}, ${erkekrol2} \

<:yildiz:990418884135907398>  • Ｋ𝚊𝚗𝚊𝚕: <#1031885644206710804> <#939593667751051337> <#905630996152586351>

• ---------------------------------------------------------------------- •

<:yildiz:990418884135907398>  • ✵ Ｔoplam Ｋayıtların:【${alldata}】

<:yildiz:990418884135907398>  • ⁂ <#${message.channel.id}> Kullanılan Kanal`)
.setColor('AQUA'))

                                                    //PROJENİN SAHİBİ GRAVİTY#2566                  // yas: age,
datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name,  role: erkekrol.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['erkek', 'e', 'boy', 'man', 'adam'], permLevel: 0}
exports.help = {name: 'erkek', description: "Etiketlenen kişiyi erkek rolleriyle kayıt eder.", usage: ',erkek @etiket/id İsim Yaş'}//PROJENİN SAHİBİ GRAVİTY#2566