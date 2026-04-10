import path from "node:path";
import url from "url";


const filePath = './dir1/dir2/test.txt';

// basename()
console.log(`The basename of this file is: ${path.basename(filePath)}`);

// dirname()
console.log(`The dirname of this file is: ${path.dirname(filePath)}`);

// extname()
console.log(`The extname of this file is: ${(path.extname(filePath))}`);

// parse()
console.log(path.parse(filePath));


const __filename = url.fileURLToPath(import.meta.url);
console.log(`The filename is: ${__filename}`);

const __dirname = path.dirname(__filename);
console.log(`The dirname is: ${__dirname}`);

// join()
const filePathJoin = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(`The joined filePath is: ${filePathJoin}`);

// resolve()
const filePathResolve = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(`The resolved dirname path is: ${filePathResolve}`);





