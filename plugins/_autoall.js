/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
/*if (modepublic === true) return m.reply('udah Public bodo\n\nOwner nya bodo gesss')
if (autoon === true) return m.reply('udah Otomatis Online bodo\n\nOwner nya bodo gesss')
if (autoketik === true) return m.reply('udah Otomatis Ketik bodo\n\nOwner nya bodo gesss')
if (autovn === true) return m.reply('udah Otomatis VN bodo\n\nOwner nya bodo gesss')*/
modepublic = true
autoreyad = true
autoon = true
autoketik = true
autovn = true
m.reply(`Success Activated : 
> Mode Public
> Mode Auto Online
> Mode Auto Typing
> Mode Auto Recording
> Mode Auto Read
`)

}
handler.help = ['onall']
handler.tags = ['info', 'main']

handler.command = /^(onall)$/i

module.exports = handler