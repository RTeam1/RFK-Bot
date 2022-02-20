/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoketik === true) return m.reply('udah Otomatis Online bodo\n\nOwner nya bodo gesss')
if (autoketik === true) return 
autoketik = true
m.reply(`Success Deactivated Mode Auto Online`)

}
handler.help = ['onketik']
handler.tags = ['info', 'main']

handler.command = /^(onngetik|onk|onketik)$/i

module.exports = handler