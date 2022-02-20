let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
res = await fetch(`https://api.lolhuman.xyz/api/meme/${command}?apikey=${lolkey}`)

//https://api.lolhuman.xyz/api/random/meme?apikey=beta

//https://api.lolhuman.xyz/api/meme/memeindo?apikey=beta
  Rey = await res.buffer()
  
  await conn.send3ButtonImg(m.chat, Rey, kasihcaption, footer, 'DarkJoke', '#darkjoke', 'Meme', `#meme`, 'Memeindo', `#Memeindo`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})
  
  //conn.sendFile(m.chat, Rey, 'darkjoke/memeindo.png', 'nih', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['darkj', 'memeindo']
handler.tags = ['internet']
handler.command = /^(darkjoke|memeindo)$/i

module.exports = handler
