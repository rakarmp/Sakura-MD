const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan3 = `jika Anda ingin membalas Pesan rahasia / menfess ini anda tinggal ketik berikut
Contoh : !balas <pesan>
contoh : !balas Ini Siapa ya?

jika anda ingin mengirim pesan rahasia/menfes juga
mudah loh tinggal ketik
!menfes nomor|pesan
contoh
!menfes 628512345577|Haii

©Privasi Aman Kok :p`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})