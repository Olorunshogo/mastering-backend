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

console.log("Dirname: " + __dirname);
console.log("File name: " + __filename);

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Local
const secret = "SUPER SECRET";
// Functions
const sayHi = (name) => {
  console.log(`Hello there ${name}!`);
};

const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`The sum of ${num1} and ${num2} is:  ${num1 + num2}.`);
}

// Objects
const items = ["items1", "items2"];
const person = {
  name: "Bob",
};

// Export default
module.exports = { 
  sayHi,
  addValues,
  items,
  person
};