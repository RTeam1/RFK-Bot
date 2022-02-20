let handler = async (m, { conn }) => m.reply('https://github.com/RTeam1/RFK-Bot')
handler.help = ['script', 'sc']
handler.tags = ['info']
handler.command = /^s(c|cript)$/i

module.exports = handler
