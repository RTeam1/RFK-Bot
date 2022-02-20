/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/

let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, {contextInfo:{externalAdReply: {title: run, body: 'Simple WhatsApp Bot', sourceUrl: linkf, thumbnail: thumb3}}}
            )


//kode ini udah basi bro
  //conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

module.exports = handler
