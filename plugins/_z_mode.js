/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

/*if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (modeself === false) return m.reply('udah public bodo')
if (modeself === false) return 
modeself = false
m.reply(`Success Activated Mode Public`)
*/
conn.send2Button(m.chat, 'Pilih Mode self atau publik?', footer, 'Self', '#self', 'Public', '#publik',m)
}
handler.help = ['mode']
handler.tags = ['info', 'main']

handler.command = /^(modebot|mode)$/i

module.exports = handler