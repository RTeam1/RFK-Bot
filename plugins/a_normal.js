/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK


Udah dikasih apikey gratis
tapi seenaknya ngubah Watermark?
Adu Mekanik aja sini lu anjink
*****/


let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	//if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	
  res = await fetch(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolkey}`)
  Rey = await res.buffer()
  conn.sendButtonImg(m.chat, Rey, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['bts', 'exo', 'blackpink', 'cecan', 'cogan', 'estetic', 'elf','loli','neko','shota','waifu','husbu','sagiri','elaina','shinobu','kanna','megumin','art','wallnime']
handler.tags = ['normal']
handler.command = ['bts', 'exo', 'blackpink','cecan', 'cogan', 'estetic', 'elf','loli','neko','shota','waifu','husbu','sagiri','elaina','shinobu','kanna','megumin','art','wallnime']

handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

