let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

/*if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (modeself === false) return m.reply('udah public bodo')
if (modeself === false) return 
modeself = false
m.reply(`Success Activated Mode Public`)
*/
conn.send2Button(m.chat, 'Pilih Mode self atau publik?', footer, 'Self', '#self', 'Publik', '#publik',m)
}
handler.help = [' mode']
handler.tags = ['info', 'main']

//handler.command = /^(modebot|mode)$/i
handler.customPrefix = /^(modebot|mode)$/i
handler.command = new RegExp
module.exports = handler