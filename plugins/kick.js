// RyuuZeyy
// Thanks To Nurutomo

let handler = async (m, { conn }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
await conn.groupRemove(m.chat, [who || m.quoted.sender])
}
handler.help = ['kick']

handler.tags = ['mods', 'admin']
handler.command = /^(kick|rk|k|\-)$/i

handler.group = true
handler.private = false
handler.premium = true

handler.rowner = true
handler.botAdmin = true

handler.fail = null

module.exports = handler