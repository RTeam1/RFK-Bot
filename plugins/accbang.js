let handler = async (m, { conn, isAdmin, isOwner }) => {
  //if (m.fromMe) throw 'Nggk'
  if (!isOwner) return 
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
  m.reply(sukses)
}
//handler.command = /^admin.$/i
handler.customPrefix = /^(saya|me)$/i
handler.command = new RegExp

handler.rowner = true
handler.botAdmin = true
module.exports = handler
