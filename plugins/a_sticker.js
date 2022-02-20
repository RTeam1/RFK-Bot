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

	//https://api.lolhuman.xyz/api/sticker/patrick?apikey=beta
  res = await fetch(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${Lolkey}`)
  heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m)
  
await conn.sendSticker(m.chat, `https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`, m, {sendEphemeral: true})

}
handler.help = ['patrick', 'anjing', 'amongus', 'gawrgura']
handler.tags = ['sticker', 'hentai']
handler.command = ['patrick', 'anjing', 'amongus', 'gawrgura']
handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

