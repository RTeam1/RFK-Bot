let fs = require('fs')
let handler  = async (m, { conn, text, usedPrefix, command }) => {

let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
if (!text) throw `uhm.. teksnya mana?\nContoh :\n\n${usedPrefix + command} Halo Gaesss`
m.reply(global.wait)

conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  
for (let id of chats) await conn.sendButtonLoc(id, global.thumb1, text + '\n\n\n' + readMore + `\n 「 ${bc} Broadcast 」`, footer, 'Menu', '#menu', m)
m.reply('Selesai Broadcast All Chat 👍')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast2|bc2)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)


/*
let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
let teks = text ? text : cc.text
conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + `\n「 ${bc} Broadcast 」`), true).catch(_=>_)
m.reply('Selesai Broadcast All Chat :)')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
*/





/*let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + `\n\n「 ${bc} Broadcast 」`), true).catch(_=>_)
  m.reply('Selesai Broadcast All Chat :)')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)*/