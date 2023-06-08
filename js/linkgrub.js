const chalk = require('chalk')
const fs = require('fs')
global.linkgrub = `https://chat.whatsapp.com/I7HTd6cuQBBD57iy6IWqYx` //ini untuk Link grub button
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})