import http from 'http';
import 'dotenv/config';
import fs from "fs/promises";
import path from 'path';
import url from "url";


const PORT: number = Number(process.env['PORT']) || 8000;

// GET current path
const __filename = url.fileURLToPath(import.meta.url);
console.log("Directory name is: ", __filename);

const __dirname = path.dirname(__filename);
console.log("Directory name is: ", __dirname);



const server = http.createServer((req, res) => {
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

      // Lets create a router
      if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end('<h1>Homepage</h1>');
      } else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end('<h1>About Page!</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.end('<h1>Not Found!</h1>');
      }

    } else {
      throw new Error("Method not allowed");
    }

  } catch (error) {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end('<h1>Server Error!</h1>');
  }



});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
