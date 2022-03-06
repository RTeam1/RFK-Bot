/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoon === true) return m.reply('Auto Online udah Aktif Banhhh,🗿🚬')
if (autoon === true) return 
autoon = true
m.reply(`Success Activated Mode Auto Online`)
 
}
handler.help = ['online']
handler.tags = ['info', 'main']

handler.command = /^(online|ononline)$/i

module.exports = handler