let handler = async (m, { text, usedPrefix, command }) => {
  await conn.send2Button(m.chat, `“Pilih Truth Or Dare”`, footer, 'Truth', `#Truth`, 'Dare', '#dare', m)
}

handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod)$/i

module.exports = handler