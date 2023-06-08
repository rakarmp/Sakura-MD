const chalk = require('chalk')
const fs = require('fs')
global.sukses = `Sukses\nJangan lupa Follow yha\nInstagram : @vlntncptr\nYoutube : Lenttobs\n`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})