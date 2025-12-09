
// Controllers are the things which really decide what kind of response has to bg to go on the request.

import { User } from "../models/users.model.js"; 

const registerUser = async (req, res) => {
  try {
    const  { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).jsom({ 
        message: "All fields are important!"
      });
    }

    // Check if user exists already
    const existing = await User.findOne({ email: email.toLowercase() });
    if (existing) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create User
    const user = await User.create({
      username,
      email: email.toLowercase(),
      password,
      loggedIn: false,
    });    

    res.status(201).json({
      message: "User registered",
      user: { id: user_id, email: user.email, username: user.username }
    });

  } catch (error) {

    res.status(500).json({ message: "Internal Server error", error: error.message });
    
  }
};

export {
  registerUser
};
