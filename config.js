/**
* Thanks To
* Allah S.W.T
* Ortu
* BOT INDO
* Dika Ardnt
* Sanzy Kawaii
* FIRAA
* Guntur
* Dhika Ardiant
* All Creator Bot
* All Subscriber Ku
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281322577123'] //ganti jadi nomor lu
global.premium = ['6281322577123'] //nomornya samain kaya yg di atas
global.packname = 'Lintang Bot' //ganti aja sesuai keinginan lu
global.author = 'Lintang Bot' //ganti aja
global.sessionName = 'Lintang Bot' //ini buat nama session terserah mau ganti apa nggk
global.prefa = ['']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Emang Lu Admin Group Tod!!!',
    botAdmin: 'Jadiin Admin Dulu Tod!!!',
    eror: 'Yah Eror kak',
    owner: 'Emang Lu Ownernya Tod!!!',
    group: 'Digunakan Hanya Untuk Group Tod!!!',
    private: 'Digunakan Hanya Untuk Private Chat Tod!!!',
    bot: 'Khusus Pengguna Nomor Bot Tod!!!',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/apri.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
