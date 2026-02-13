// Grab the http module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page: Welcome!!!");
    console.log("Home page");
    return;
  }

  if (req.url === "/about") {
    res.end("About Page: Here is our short history.");
    console.log("About page");
    return;
  }

  if (req.url === "/contact") {
    res.end("Contact Page: Contact us here.");
    console.log("Contact page");
    return;
  }

  res.statusCode = 404;
  // console.log(req.url);
  res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">Go to home page</>
  `);
});

server.listen(4500);
