/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoreyad === true) return m.reply('udah Otomatis Online bodo\n\nOwner nya bodo gesss')
if (autoreyad === true) return 
autoreyad = true
m.reply(`Success Activated Mode Auto Read`)

}
handler.help = ['onread']
handler.tags = ['info', 'main']

handler.command = /^(onr|onread)$/i

module.exports = handler