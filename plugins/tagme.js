let handler = async (m, { conn, text }) => {
  let tag = `@${m.sender.replace(/@.+/, '')}
  wa.me/${m.sender}
  `
  let mentionedJid = [m.sender]
  conn.reply(m.chat, tag, m, { contextInfo: { mentionedJid }})
}
handler.help = ['tagme']
handler.tags = ['group']
handler.command = /^tagme$/i

handler.group = false

module.exports = handler