/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (pconly === false) return m.reply('PC only udah mati bodo\n')
//if (modepublic === true) return 
pconly = false
m.reply(`Success Mematikan Mode PC Only

Artinya... Bot hanya akan merespon di pribadi Bot`)

}
handler.help = ['offpconly']
handler.tags = ['info', 'main']

handler.command = /^(offpc|offpconly)$/i

module.exports = handler