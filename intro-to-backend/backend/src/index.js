
// This is the file where we start our server.
// This is the file which stats the backend service

import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
  path: './.env'
});

const startServer = async () => {
  try {
    await connectDB();

    // Switch on the app
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    // App should listen
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on: ${process.env.PORT}`);   
    });
    
  } catch (error) {
    console.log("MongoDB connection failed!!", err);    
    
  }
}

startServer();
