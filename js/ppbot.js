const chalk = require("chalk");
const fs = require("fs");
global.ppbot = `https://github.com/rakarmp/Sakura-MD/blob/master/gambar/sakura.png?raw=true`; // pakai url gmbr
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
