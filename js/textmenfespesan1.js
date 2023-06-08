const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan1 = `kenalin Saya merupakan Bot Saya di tugaskan megirim menfess
dari seseorang yang tidak bisa saya sebutkan namanya
kemungkinan berikut Pesan dari seseorang tersebut untuk anda` // lalu ke variabel pesan 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})