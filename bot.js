const Discord = require('discord.js');//PROJENİN SAHİBİ GRAVİTY#2566
const client = new Discord.Client();//PROJENİN SAHİBİ GRAVİTY#2566
const ayarlar = require('./ayarlar.json');//PROJENİN SAHİBİ GRAVİTY#2566
const chalk = require('chalk');//PROJENİN SAHİBİ GRAVİTY#2566
const moment = require('moment');//PROJENİN SAHİBİ GRAVİTY#2566
var Jimp = require('jimp');//PROJENİN SAHİBİ GRAVİTY#2566
const fs = require('fs');//PROJENİN SAHİBİ GRAVİTY#2566
const db = require('quick.db');////PROJENİN SAHİBİ GRAVİTY#2566
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;////PROJENİN SAHİBİ GRAVİTY#2566
//
const log = message => {////PROJENİN SAHİBİ GRAVİTY#2566
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();////PROJENİN SAHİBİ GRAVİTY#2566
client.aliases = new Discord.Collection();////PROJENİN SAHİBİ GRAVİTY#2566
fs.readdir('./komutlar/', (err, files) => {////PROJENİN SAHİBİ GRAVİTY#2566
    if (err) console.error(err);////PROJENİN SAHİBİ GRAVİTY#2566
    log(`${files.length} komut yüklenecek.`);////PROJENİN SAHİBİ GRAVİTY#2566
    files.forEach(f => {////PROJENİN SAHİBİ GRAVİTY#2566
        let props = require(`./komutlar/${f}`);////PROJENİN SAHİBİ GRAVİTY#2566
        log(`Yüklenen komut: ${props.help.name}.`);////PROJENİN SAHİBİ GRAVİTY#2566
        client.commands.set(props.help.name, props);////PROJENİN SAHİBİ GRAVİTY#2566
        props.conf.aliases.forEach(alias => {////PROJENİN SAHİBİ GRAVİTY#2566
            client.aliases.set(alias, props.help.name);////PROJENİN SAHİBİ GRAVİTY#2566
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });//PROJENİN SAHİBİ GRAVİTY#2566
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });//PROJENİN SAHİBİ GRAVİTY#2566
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

//------------------------------ BOT OYNUYOR ------------------------------------\\

client.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      client.user.setActivity("・ (Prefix) ,");
        type: ("dnd");
});
//------------------------------ BOT OYNUYOR ------------------------------------\\



//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
          '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,
            '4': `4`,
            '5': `5`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];})}
      const kanal = member.guild.channels.cache.find(r => r.id === "939216882161057823");//mesaj atılcak kanal id
      let register = '829771523048996884'//kayıt yetkili id
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = 'Hesap Durumu: ❌ Güvenilir Değil. ❌'
  if (kurulus > 2596000000) kontrol = 'Hesap Durumu: ✔️ Güvenilir Gözüküyor. ✔️'
    moment.locale("tr");
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.guild.name, member.guild.iconURL({dynamic:true}))
  .setDescription(`
  ▫️<@`+member.id+`> **Sunucumuza Katıldı !** 
  
  ▫️**Kayıt edilmek için teyit odasında <@&${register}> rolündekilerine teyit vermen yeterli ! **
  
  ▫️**Seninle birlikte **`+üyesayısı+`** kişiye ulaştık !**
  
  ▫️**Sunucumuzun kurallarına uymayı unutma, kurallarımızı okumanı tavsiye ederiz.**

  ▫️**Sunucumuzun tagını (\` ⌭ • \`) alarak bizlere destek olabilirsin**

  ▫️**İçeride keyifli vakitler geçirmeni dileriz.**
`)
  kanal.send(embed) 
  kanal.send(`<@&${register}> - <@`+member.id+`>`)
});
//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     //PROJENİN SAHİBİ GRAVİTY#2566

//------------------------ŞÜPHELİ-HESAP-----------------------\\     //PROJENİN SAHİBİ GRAVİTY#2566

client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("birkaç saniye önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
    const kytsz = member.guild.roles.cache.find(r => r.id === "") 
     var rol = member.guild.roles.cache.get("") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
     var kayıtsız = member.guild.roles.cache.get(kytsz) // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
     member.roles.add(rol)
     member.roles.remove(kytsz)

  member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
  setTimeout(() => {
  
  }, 1000)
  
  
     }
          else {
  
          }
      });

//------------------------ŞÜPHELİ-HESAP-----------------------\\ 

//-------------------------------------LOGLAR-------------------------------------------------\\
  client.on("voiceStateUpdate", async (oldState, newState) => {

    const seslog = client.channels.cache.get("1049012223877582929") //KANAL ID
    if(oldState.member.user.bot || newState.member.user.bot) return;

    if(!oldState.channel && newState.channel) seslog.send(`~ 𝚆𝚊𝚒𝚏 : #𝙶𝚊𝚖𝚒𝚗𝚐 ™  \ ${newState.member.user}  ${newState.channel} Sesli Kanala **giriş yaptı.**`)
    if(oldState.channel && !newState.channel) seslog.send(`~ 𝚆𝚊𝚒𝚏 : #𝙶𝚊𝚖𝚒𝚗𝚐 ™  \ ${oldState.member.user}  \`${oldState.channel.name}\` Sesli Kanaldan **çıkış yaptı.**`)
    if(oldState.channel && newState.channel && oldState.channel !== newState.channel) seslog.send(`${newState.member.user}\  \`${oldState.channel.name}\` Sesli Kanaldan \ ${newState.channel}\` Kanala Geçiş Yaptı.**`)
    if(oldState.serverMute === false && newState.serverMute === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından susturuldu.**`)
    if(oldState.serverMute === true && newState.serverMute === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından susturulması kaldırıldı.**`)
    if(oldState.serverDeaf === true && newState.serverDeaf === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından **sağırlaştırıldı.**`)
    if(oldState.serverDeaf === true && newState.serverDeaf === true) seslog.send(`\ ${oldState.member.user} \`  **Yetkili tarafından **sağırlaştırılması kaldırıldı.**`)
    if(oldState.selfVideo === false && newState.selfVideo === true) seslog.send(`\ ${oldState.member.user} \`  **Kamera yayını açtı.**`)

    })


//--------------------------------------TAG------------------------------------------------\\
client.on("userUpdate", async (oldUser, newUser) => {
  const tag = 'Ϟ'
  const sunucu = '901554012795568138'
  const kanal = '1049001532659613756'
  const rol = '946051677079879681'

  try {
  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} Ϟ Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser} Tagımızı    Aldığın          İçin          Ϟ      Rolünü      Sana      Verdim`)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} Ϟ Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser} Tagımızı    Çıkardığın       İçin          Ϟ      Rolünü      Senden     Aldım`)
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
);

//----------------------TAG-KONTROL----------------------\\   

client.on("guildMemberAdd", member => {
  let sunucuid = "809835006721392664"; //Buraya sunucunuzun IDsini yazın
  let tag = "⌭ •"; //Buraya tagınızı yazın
  let rol = "829771713746305045"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.name == 'mod-log'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
      .setTimestamp()
     client.channels.cache.get('tag-log').send(tagalma)
}
})

//-----------------------ENV----------------------\\  
let cstoken;
if (ayarlar.TOKEN) {
  cstoken = ayarlar.TOKEN;
}
if (process.env.TOKEN) {
  cstoken = process.env.TOKEN;
}
if (cstoken) {
  client.login(cstoken).catch(e => {
  console.log("Projeye Yazılan Token Hatalı veya Discord Botunuzun Intentleri Kapalı!")
})
} else {
  console.log("Projeye Hiç Bir Bot Tokeni Yazılmamış!");
}

client.ayarlar = ayarlar
