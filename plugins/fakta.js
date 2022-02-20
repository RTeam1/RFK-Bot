let fetch = require('node-fetch')


let handler  = async (m, { conn, usedPrefix, command }) => {
  ddd = await fetch('https://recoders-area.caliph.repl.co/api/fakta?apikey='+APIKeys["https://recoders-area.caliph.repl.co"])
  f = await ddd.json()
  //conn.reply(m.chat,`${f.result}`, m)
  
  await conn.sendButton(m.chat, `“${f.result}”`, footer, 'Fakta', `${usedPrefix + command}`, m)
} 
handler.help = ['fakta']
handler.tags = ['edukasi']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
