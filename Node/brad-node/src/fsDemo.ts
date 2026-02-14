// import fs from "fs";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "test.txt");

// // readFile() - callback
// fs.readFile(filePath, "utf-8", (error, data) => {
//   // The callback will run once the file is read. It takes in an error and data
//   if (error) {
//     throw new Error("There's an error in reading the test.txt file.");
//   };
//   console.log(data);
// });

// // readFileSync() - Synchronous version
// const data = fs.readFileSync(filePath, "utf-8");
// console.log(data);

// // readFile() - Promises .then()
// fs.readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// readFile() - async/await
const asyncReadFile = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("This is from the async readFile: ", data);
  } catch (error) {
    console.log(error);
  }
}
asyncReadFile();

// writeFile
const asyncWriteFile = async () => {
  try {
    await fs.writeFile(filePath, "Hello, I am writing to this file");
    console.log(`This filepath, ${filePath} was written to.`);
      console.log("File Written to...");

  } catch (error) {
    console.log(error);
  }
}
asyncWriteFile();

// async appendFile()
const asyncAppendFile = async () => {
  try {
    await fs.appendFile(filePath, "\nThis is appended text");
      console.log("File appended to...");

  } catch (error) {
    console.log(error);
  }
}
asyncAppendFile();

