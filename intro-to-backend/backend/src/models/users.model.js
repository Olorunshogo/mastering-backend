
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {

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

// Before saving any password, we need to hash it
// pre - save password but before then, hash it
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10)

  // Let other task resume after this
  //next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}


export const User = mongoose.model("User", userSchema)
