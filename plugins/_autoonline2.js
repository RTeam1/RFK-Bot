/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoon === false) return m.reply('udah mati Otomatis Online nya bodo\n\nOwner nya bodo gesss')
if (autoon === false) return 
autoon = false
m.reply(`Success Deactivated Mode Auto Online`)

}
handler.help = ['offline']
handler.tags = ['info', 'main']

handler.command = /^(offline|offonline)$/i

module.exports = handler