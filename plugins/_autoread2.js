/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoreyad === false) return m.reply('udah Otomatis Online bodo\n\nOwner nya bodo gesss')
if (autoreyad === false) return 
autoreyad = false
m.reply(`Success DeActivated Mode Auto Read`)

}
handler.help = ['offread']
handler.tags = ['info', 'main']

handler.command = /^(offr|offread)$/i

module.exports = handler