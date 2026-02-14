import { createServer } from "node:http";
import 'dotenv/config';

const PORT2: number = Number(process.env['PORT2']) || 8000;

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "1 John Doe" },
  { id: 2, name: "2 Jane Doe" },
  { id: 3, name: "3 Jim Doe"},
  { id: 4, name: "4 Doe Jane Jim" }
];

const server = createServer(async(req, res) => {
  if (req.url === '/api/users' && req.method === "GET") {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();

  } else if (req.url?.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const url = new URL(req.url!, `http://${req.headers.host}`);
    const id = Number(url.pathname.split('/')[3]);

    // const idString = req.url.split('/')[3];

    // const id = Number(idString);

    // if (isNaN(id)) {
    //   res.statusCode = 400;
    //   res.setHeader('Content-Type', 'application/json');
    //   res.end(JSON.stringify({ message: "Invalid user id" }));
    //   return;
    // }

    const user = users.find(u => u.id === id);

    if (!user) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: "User not found" }));
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));

  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT2, () => {
  console.log(`Server 2 is running on port: ${PORT2}`)
});

