const chalk = require("chalk");
const fs = require("fs");
global.linkgrub = `https://chat.whatsapp.com/KRJFqLmRIdgKdyIQV9RUIN`; //ini untuk Link grub button
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
