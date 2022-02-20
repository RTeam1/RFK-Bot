// Rey

let handler  = async (m, { itsu, usedPrefix: _p }) => {
let { performance } = require('perf_hooks')
let fs = require('fs')

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`

}
runtime = process.uptime()
teks = `${kyun(runtime)}`
m.reply(teks)
}


handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^runtime$/i

module.exports = handler