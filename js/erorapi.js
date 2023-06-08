const chalk = require('chalk')
const fs = require('fs')
global.erorapi = `Terjadi kesalahan Saat Memuat permintaan anda Silahkan tunggu beberapa saat Lalu coba kembali...Jika Masalah masi belum terselesaikan silahkan hubungi owner...!`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})