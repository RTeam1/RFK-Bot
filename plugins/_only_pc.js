/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (pconly === true) return m.reply('PC only udah Aktif bodo\n')
//if (modepublic === true) return 
pconly = true
m.reply(`Success Activated Mode PC Only

Artinya... Bot hanya akan merespon di pribadi Bot`)

}
handler.help = ['pconly']
handler.tags = ['info', 'main']

handler.command = /^(onpc|pconly)$/i

module.exports = handler