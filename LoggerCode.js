let fs = require('fs');
let Red = "\u001b[31m";
let Green = "\u001b[32m";
let Yellow = "\u001b[33m";
let Blue = "\u001b[38;5;27m";
let Gray = "\u001b[38;5;250m";
let darkGray = "\u001b[30;1m";
let Reset = "\u001b[0m";
let date = new Date();
let sec = date.getSeconds();
let mins = date.getMinutes();
let hours = date.getHours();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let stream = fs.createWriteStream(`./logs/${file}.log`);
let time = `[${hours}:${mins}:${sec}]${darkGray}|${Reset}`;
let time2 = `[${hours}:${mins}:${sec}]`;
let file = `${month}-${day}-${year}  ${hours}-${mins}-${sec}`;
month = month + 1
if (mins < 10){mins = '0' + mins}
try {if (!fs.existsSync("./logs")) {fs.mkdirSync("./logs")}} catch (err) {console.error(err)}
fs.writeFileSync(`./logs/${file}.log`," ");
/**@param {string} logText The Text To Log*/
function log(logText){console.log(`${Blue}${time}${Blue}[Info]> ${Gray}${logText}`);
stream.write(`${time2}[Info]>${logText}\n`,'utf-8')};
/**@param {string} logText The Text To Log*/
function warn(logText){console.log(`${Yellow}${time}${Yellow}[Warn]> ${Gray}${logText}`);
stream.write(`${time2}[Warn]>${logText}\n`,'utf-8')};
/**@param {string} logText The Text To Log*/
function error(logText){console.log(`${Red}${time}${Red}[Error]> ${Gray}${logText}`);
stream.write(`${time2}[Error]>${logText}\n`,'utf-8')};
/**@param {string} logText The Text To Log*/
function debug(logText){console.log(`${Green}${time}${Green}[Debug]> ${Gray}${logText}`);
stream.write(`${time2}[Debug]>${logText}\n`,'utf-8')};
stream.end();
