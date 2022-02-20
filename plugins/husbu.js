let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
m.reply('Searching...')
        fetch(`${wm_rey}master/ranime/` + 'husbu.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, 'wibu.png', 'Dasar Wibu', m)
                //conn.sendButtonImg(m.chat, randomnimex, 'Dasar Wibu' footer, 'Husbu Lagi', '#husbu', m)
                //conn.send2ButtonImg(m.chat, randomnimex, 'Dasar Wibu' footer, 'Husbu Lagi', '#husbu', 'Waifu', '#waifu', m)
                //conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Istri kartun', footer, 'Next', `${usedPrefix + command}`, m,)
                /*
if button / image with button = m, { blablabla
m, { contextInfo: { forwardingScore: 999, isForwarded: true }})*/
            })
            
    }

handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler