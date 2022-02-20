/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK

Thanks To All Bot Creator
*****/

const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  try {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: teks }))
    res = await url.json()
    stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m, contextInfo:{externalAdReply: {title: run, body: 'WhatsApp Bot', sourceUrl: linkf, thumbnail: thumb3}}
    })
    /*conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })*/
  } catch (e) {
    m.reply('Conversion Failed')
    throw false
  }
}
handler.help = ['ttp2 <teks>']
handler.tags = ['sticker']
handler.command = /^(ttp2)$/i
handler.limit = true
//MadeByAnshul
module.exports = handler