import http from 'http';
import 'dotenv/config';
import fs from "fs/promises";
import path from 'path';
import url from "url";


const PORT1: number = Number(process.env['PORT1']) || 5000;

// GET current path
const __filename = url.fileURLToPath(import.meta.url);
console.log("File name is: ", __filename);

const __dirname = path.dirname(__filename);
console.log("Directory name is: ", __dirname);


const server = http.createServer(async(req, res) => {
  //  Write to the browser
  // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Content-Type', 'text/plain');
  // res.statusCode = 404;
  // res.end('<h1>Hello World!</h1>');

  // res.writeHead(500, { 'content-type': 'application/json'})
  // res.end(JSON.stringify({ message: 'Server Error' }));

  // console.log(req.url);
  // console.log(req.method);

  try {
    // Check if GET request
    if (req.method === "GET") {
      let filePath: string;
      // Lets create a router
      if (req.url === "/") {
        filePath = path.join(__dirname, '..', 'public', 'index.html');
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, '..', 'public', 'about.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Not Found!</h1>');
        return;
      }

      const data = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }

  } catch (error) {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end('<h1>Server Error!</h1>');
  }



});

server.listen(PORT1, () => {
  console.log(`Server running on port: ${PORT1}`);
});
