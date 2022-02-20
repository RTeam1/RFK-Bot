/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/

let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoketik === false) return m.reply('udah Otomatis Online bodo\n\nOwner nya bodo gesss')
if (autoketik === false) return 
autoketik = false
m.reply(`Success Deactivated Mode Auto Ketik`)

}
handler.help = ['offketik']
handler.tags = ['info', 'main']

handler.command = /^(offngetik|offk|offketik)$/i

module.exports = handler