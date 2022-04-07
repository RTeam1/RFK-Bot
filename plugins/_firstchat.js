let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 3600000) return // setiap 1 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : 'Ada yang bisa saya bantu?'}



┌─〔 Status Bot 〕
├${modepublic ? '> PUBLIC-MODE' : '> SELF-MODE'}
├${autoreyad ? '> Otomatis Read ✅' : '> Auto Read ❌'}
├${autoon ? '> Otomatis Online ✅' : '> Auto Online ❌'}
├${autoketik ? '> Otomatis Ketik ✅' : '> Auto Ketik ❌'}
├${autovn ? '> Otomatis VN ✅' : '> Auto VN ❌'}
├${pconly ? '> Hanya respon di pribadi ✅' : '> Hanya respon di pribadi ❌'}
├${gconly ? '> Hanya respon di grup ✅' : '> Hanya respon di grup ❌'}
├
└───────────────

`.trim(), footer, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '#owner' : '#menu', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}