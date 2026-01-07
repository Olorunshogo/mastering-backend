
// Controllers are the things which really decide what kind of response has to bg to go on the request.
import { User } from "../models/users.model.js";

// Register user
const registerUser = async (req, res) => {
  try {
    const  { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ 
        message: "All fields are important!"
      });
    }

    // Check if user exists already
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ 
        message: "User already exists!" 
      });
    }

    // Create User
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });    

    res.status(201).json({
      message: "User registered",
      user: { 
        id: user._id, 
        email: user.email, 
        username: user.username 
      }
    });

  } catch (error) {
    res.status(500).json({ 
      message: "Internal server error", 
      error: error.message 
    });    
  }
};

// Login user
const loginUser = async (req, res) => {
  try {    
    // Checking if the user exists already
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase()
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // Compare the passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    res.status(200).json({
      message: "User Logged in",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
    
  }
};

// Logout user
const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      email
    });

    if (!user) return res.status(404).json({
      message: "User not found"
    });

    res.status(200).json({
      message: "Logout successful",
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error: ", error
    });
    
  }
};

export { 
  registerUser, 
  loginUser,
  logoutUser,
};
