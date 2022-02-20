/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK


Udah dikasih apikey gratis
tapi seenaknya ngubah Watermark?
Adu Mekanik aja sini lu anjink
*****/


let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw

  res = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolkey}`)
  heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['blowjob', 'trap', 'yaoi', 'milf', 'ecchi', 'hentai', 'ahegao', 'hololewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animeaempits', 'hentaifemdom', 'lewdanimegirls', 'biganimetiddies', 'hentai4everyone']
handler.tags = ['hentai']
handler.command = ['blowjob', 'trap', 'yaoi', 'milf', 'ecchi', 'hentai', 'ahegao', 'hololewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animeaempits', 'hentaifemdom', 'lewdanimegirls', 'biganimetiddies', 'hentai4everyone']
handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

