let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  m.reply('Sedang Diproses...')
  bzz = await fetch(`https://api.lolhuman.xyz/api/random2/pussy?apikey=${lolkey}`)
  res = await bzz.buffer()
  conn.sendButtonImg(m.chat, res, 'mpsss ahhh', footer, 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['pussy']
handler.tags = ['hentai']

handler.command = /^(pussy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

