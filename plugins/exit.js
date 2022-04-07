let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Sukses mematikan Bot')
    await global.db.write()
    process.exit()
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Not working)')]
handler.tags = ['host']
handler.command = /^exit$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

