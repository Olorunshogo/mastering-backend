
const { readFileSync, writeFileSync } = require("fs");
console.log('Start!');

// We need to provide a path to the file and its encoding.
// The node knows how to decode it
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: \n ${first} ${second}`,
  { flag: 'a' }
);

console.log("Done with this task.");
console.log("Starting the next one.");




