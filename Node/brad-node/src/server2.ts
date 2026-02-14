import { createServer, IncomingMessage, ServerResponse } from "node:http";
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

// Logger middleware
const logger = (
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
): void => {
  console.log(`${req.method} ${req.url}`);
  next();
}

// JSON middleware
const jsonMiddleware = (
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
): void => {
  res.setHeader('Content-Type', 'application/json');
  next();
}

// Route handler for GET /api/users
const getUsersHandler = (req: IncomingMessage, res: ServerResponse): void => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req: IncomingMessage, res: ServerResponse): void => {  const url = new URL(req.url!, `http://${req.headers.host}`);
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
};

// Not found handler
const notFoundHandler = (req: IncomingMessage, res: ServerResponse): void => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
}

// Route handler for POST /api/users
const createUserHandler = (req: IncomingMessage, res: ServerResponse): void => {
  let body = '';
  // Listen for data: The callback should take in a chunk and should be converted to a string
  req.on('data', (chunk) => {
    // We need access to that variable and append onto it that chunk
    body += chunk.toString();
  });

  // Listen for end: We should have access to the body vairable which would include anything that we include
  req.on('end', () => {
    const newUser: User = JSON.parse(body); // Turn it back to normal TS. In reality, it's going into a database
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
}

const server = createServer(async(req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if ((req.url?.match(/\/api\/users\/([0-9]+)/) && req.method === "GET")) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });

  });
});



server.listen(PORT2, () => {
  console.log(`Server 2 is running on port: ${PORT2}`)
});

