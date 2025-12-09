
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true, // Trim the whitespaces
    minLength: 1,
    maxLength: 30,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    // You can have email match but will be empty for now
  },

  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
    maxLength: 50,
  },


},

{
  // Always get timestanps of every user when the user was created
  timestamps: true,
}


);

export const User = mongoose.model("User", userSchema)
