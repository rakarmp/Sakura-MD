const chalk = require('chalk')
const fs = require('fs')
global.ppbot = `https://telegra.ph/file/537877b0c11105d752bcd.jpg`// pakai url gmbr
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})