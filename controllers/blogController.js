import BlogPost from "../models/blogModel.js";
import fs from "fs";

// Create a blog post
export const createBlogPostController = async (req, res) => {
  try {
    // Destructuring fields and files
    const { title, content, category } = req.fields;
    const { photo } = req.files;

    // Check if all required fields are provided
    if (!title || !content || !category) {
      return res.status(400).send("All fields are required");
    }

    // Initialize new blog post
    const newBlogPost = new BlogPost({ title, content, category });

    // Check if a photo is uploaded
    if (photo) {
      try {
        // Read the file data
        newBlogPost.photo.data = fs.readFileSync(photo.path);
        newBlogPost.photo.contentType = photo.type;
      } catch (err) {
        return res
          .status(500)
          .send({ error: "Error reading file: " + err.message });
      }
    } else {
      return res.status(400).send("Photo is required");
    }

    // Save the new blog post to the database
    await newBlogPost.save();

    // Respond with success message
    res.status(201).send({ success: true, message: "Blog post created" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get all blog posts
export const getBlogPostsController = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
    res.status(200).send({ blogPosts });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get a single blog post by slug
export const getBlogPostController = async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).send("Blog post not found");
    res.status(200).send({ blogPost: post });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get a blog post photo
export const getBlogPhotoController = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.postId);
    if (post && post.photo.data) {
      res.set("Content-Type", post.photo.contentType);
      return res.send(post.photo.data);
    } else {
      return res.status(404).send("Photo not found");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
