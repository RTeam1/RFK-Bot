let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*INFORMATION OWNER*

*Name* : ${namaowner} ${ceco}
*Age* : 8 th
*Kelas* : 5 SD
*Status* : Only God can make me strong

*MEDIA SOCIAL*

*${namaig}*
*${namagh}*
*Facebook* : --
*Youtube* : --

_Oky Arigatoddd_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + namaowner)).buffer(), ext, footer, 'Nomor Owner', '.nowner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
