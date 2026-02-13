
// Async - We need to provide a callback ( we run it when we're done)
const { readFile, writeFile } = require("fs");

console.log("Start!");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstAsync = result;
  console.log(`First async result is: ${firstAsync}`);

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const secondAsync = result;
    console.log(`Second async result is: ${secondAsync}`);

    writeFile(
      "./content/result-async.txt",
      `Here is the async result: \n ${firstAsync} ${secondAsync}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task.");
      }
    );
  });
});


console.log("Starting the next one.");
