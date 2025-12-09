
// Mongoose is what talks to the database when using MongoDB
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect
    (`${process.env.MONGODB_URI}`)
    console.log(`\n MongoDB connected !!! ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log("MongoDB connection failed: ", error);
    process.exit(1) // This ensures that the program exits and run to the next program
    
  }
}

export default connectDB;