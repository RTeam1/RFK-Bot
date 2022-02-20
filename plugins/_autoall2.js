/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
/*if (modepublic === false) return m.reply('udah Public bodo\n\nOwner nya bodo gesss')
if (autoon === false) return m.reply('udah Otomatis Online bodo\n\nOwner nya bodo gesss')
if (autoketik === false) return m.reply('udah Otomatis Ketik bodo\n\nOwner nya bodo gesss')
if (autovn === false) return m.reply('udah Otomatis VN bodo\n\nOwner nya bodo gesss')*/
modepublic = false
autoreyad = false
autoon = false
autoketik = false
autovn = false
m.reply(`Success Nonaktif : 
> Mode Public
> Mode Auto Online
> Mode Auto Typing
> Mode Auto Recording
> Mode Auto Read
`)

}
handler.help = ['offall']
handler.tags = ['info', 'main']

handler.command = /^(offall)$/i

module.exports = handler