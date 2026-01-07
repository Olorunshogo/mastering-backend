
// Controllers are the things which really decide what kind of response has to bg to go on the request.
import { Post } from "../models/post.model.js";

// Create a post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    // Basic validation
    if (!name || !description || !age) {
      return res.status(400).json({ 
        message: "All fields are important!"
      });
    }

    // Check if post exists by name
    const existing = await Post.findOne({ name: name.toLowerCase() });
    if (existing) {
      return res.status(400).json({ 
        message: "Post exists already!" 
      });
    }

    // Create Post
    const post = await Post.create({ name, description, age });    

    res.status(201).json({
      message: "Post created successfully",
      post
    });

  } catch (error) {
    res.status(500).json({ 
      message: "Internal server error", 
      error: error.message 
    });    
  }
};

// Read all posts
const  getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
    
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });      
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    // Basic validation to chrck if the body is empty
    
    // If {name: x, description: y, age: z} -> [name, description, age]
    // Object.keys() work the keys into an array
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No data provided for update",
        error: error.message,
      });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});

    // What if we could not find the post?
    if (!post) return res.status(404).json({
      message: "Post not found",
      error: error.message,
    });

    res.status(200).json({
      message: "Post Updated Successfully", post
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {

    const post = await Post.findByIdAndDelete(req.params.id);

    // What if we could not find the post?
    if (!deleted) return res.status(404).json({
        message: "Post not found",
        error: error.message,
      });

    res.status(200).json({
      message: "Post successfully deleted",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


export { 
  createPost, getPosts, updatePost, deletePost
};
