const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan2 = `Kemungkinan itu adalah pesan dari seseorang yang tidak bisa saya sebutkan
untuk menjaga privasi pengguna kami....`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})