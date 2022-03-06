/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (modepublic === true) return m.reply('udah public bodo\n')
//if (modepublic === true) return 
modepublic = true
m.reply(`Success Activated Mode Public`)

}
handler.help = ['public']
handler.tags = ['info', 'main']

handler.command = /^(public|publik)$/i

module.exports = handler