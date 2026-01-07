
import express from "express";

const app = express(); // Create an express app

app.use(express.json());

// Routes import
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Example route: http://localhost:4000/api/v1/users/register
// Example route: http://localhost:4000/api/v1/posts/create

export default app;
