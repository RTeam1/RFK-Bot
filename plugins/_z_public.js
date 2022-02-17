let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (modepublic === true) return m.reply('udah public bodo\n\nOwner nya bodo gesss')
if (modepublic === true) return 
modepublic = true
m.reply(`Success Activated Mode Public`)

}
handler.help = ['public', 'publik']
handler.tags = ['info', 'main']

handler.command = /^(public|publik)$/i

module.exports = handler