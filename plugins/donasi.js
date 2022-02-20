let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `

┌〔 Donasi • Emoney 〕
├ Pulsa : 0896-7776-3976
├ OVO : 0896-7776-3976
├ Dana : 0896-7776-3976
├ Gopay : 0896-7776-3976
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
