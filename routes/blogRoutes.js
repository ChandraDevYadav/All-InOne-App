import express from "express";
import {
  createBlogPostController,
  getBlogPostController,
  getBlogPostsController,
  getBlogPhotoController,
} from "../controllers/blogController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Create a blog post (Admin only)
router.post(
  "/create-blog-post",
  requireSignIn,
  isAdmin,
  formidable(),
  createBlogPostController
);

// Get all blog posts
router.get("/get-blog-post", getBlogPostsController);

// Get a single blog post by slug
router.get("/get-blog-post/:slug", getBlogPostController);

// Get blog post photo
router.get("/blog-photo/:postId", getBlogPhotoController);

export default router;
