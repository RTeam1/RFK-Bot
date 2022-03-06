/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoreyad === false) return m.reply('Auto Read udah Aktif Banh🗿🚬')
//if (autovn === true) return 
autoreyad = false
m.reply(`Success Activated Mode Auto Recording`)

}
handler.help = ['offread']
handler.tags = ['info', 'main']

handler.command = /^(offr|offread)$/i

module.exports = handler