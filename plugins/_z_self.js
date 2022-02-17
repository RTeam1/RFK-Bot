let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (modepublic === false) return m.reply('udah self bodo\n\nOwner nya bodo gesss')
if (modepublic === false) return
modepublic = false
m.reply(`Success Activated Mode Self`)

}
handler.help = ['self']
handler.tags = ['info', 'main']

handler.command = /^(self)$/i
module.exports = handler