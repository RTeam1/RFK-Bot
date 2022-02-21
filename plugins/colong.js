//
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      m.reply(wait)
      stiker = await sticker(img, false, global.packname, require('awesome-phonenumber')(global.author). getNumber('international'))
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, require('awesome-phonenumber')(global.author). getNumber('international'))
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m, contextInfo:{externalAdReply: {title: '𝙍𝙚𝙖𝙡 𝙁𝙖𝙢𝙨 𝙆𝙞𝙡𝙡𝙚𝙧', body: '𝙍𝙚𝙖𝙡 𝙁𝙖𝙢𝙨 𝙆𝙞𝙡𝙡𝙚𝙧', sourceUrl: linkf, thumbnail: global.thumb1}}
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^colong$/i
handler.owner = true

module.exports = handler
