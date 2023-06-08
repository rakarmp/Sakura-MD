const chalk = require("chalk");
const fs = require("fs");

// edit thumb ada di file string/ppbot.js

global.owner = ["62895416187586"]; // pakai nomor owner
global.ownernomer = "62895416187586"; // pakai nomor owner
global.socialmedia = "IG: a.rakaabdirmp"; // ini ig buat di ownerjy
global.yutub = "YT: Comprx"; // sama
global.lokasi = "Indonesia, Jawabarat, Bandung"; //

global.packgename = "by";
global.author = "Rakarmp";

global.title = "SakuraMD"; //Tittle reply
global.body = "Arigato"; //body reply

global.welcome = false;
global.left = false;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Telah di update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
