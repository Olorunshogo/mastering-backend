const amount = 8;

if (amount < 10) {
  console.log("The number is too small.");
} else {
  console.log("Large number");
}

console.log("Hey! It's my first node program.");

// GLOBALS - NO WINDOW

// __dirname - path to current directory
//__filename - file name
// require - function to use (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

var time = 0;

setTimeout(function() {
  console.log("3 seconds have passed");
}, 3000);

var timer = setInterval(function() {
  time += 2;
  console.log(time + " seconds have passed");
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
console.log(__filename);

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");


console.log(names);
sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

console.log(data);