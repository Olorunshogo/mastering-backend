

const { readFileSync, writeFileSync } = require("fs");

// We need to provide a path to the file and its encoding.
// The node knows how to decode it
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result of writing the first and second file: ${first}, ${second}, {flag: "a"}`
);




