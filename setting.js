const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6285791762177'] // pakai nomor owner
global.ownernomer = "6285791762177" // pakai nomor owner
global.socialmedia = "IG: vlntncptr" // ini ig buat di ownerjy
global.yutub = "YT: lenttobs"// sama
global.lokasi = "Indonesia, Jawatimur, Lumajang"//

global.packgename = "by" 
global.author = "lenttobs" 

global.title = 'SakuraMD'//Tittle reply 
global.body = 'Subscribe lenttobs' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})