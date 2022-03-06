let handler = async (m) => {
//global.db.data.users[m.sender].warning += 1
    let user = global.db.data.users[m.sender]
    if (global.db.data.users[m.sender].warning = 0) throw 'Kamu tidak memiliki warning!'
    //if (user.warn === 0) throw 'Kamu tidak memiliki warning!'

    let waktu = user.lastIstigfar + 960000 // 16 menit
    if (new Date - user.lastIstigfar < 9600000) throw `Kamu bisa menggunakan perintah ini lagi setelah ${msToTime(waktu - new Date())}`
    //global.db.data.users[m.sender].warning += -1
    global.db.data.users[m.sender].warning -1
    //user.warn -=1
    m.reply(`Berhasil minta maaf\n\nWarning : ${user.warning} / 5`)
    //m.reply(`Warning: ${global.db.data.users[m.sender].warning} / 5`)
    user.lastIstigfar = new Date * 1
}
handler.command = /^(astagh?fir(ullah)?|maaf)$/i

handler.limit = true

module.exports = handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " menit " + seconds + " detik"
}