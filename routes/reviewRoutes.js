import express from "express";
import ReviewModel from "../models/reviewModel.js";
import { requireSignIn } from "../middlewares/authMiddleware.js"; // Import middleware

const router = express.Router();

// Get reviews for a product
router.get("/:productId", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({
      product: req.params.productId,
    }).populate("user", "name");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

// Create a review (Protected Route)
router.post("/", requireSignIn, async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const userId = req.user._id; // Get user ID from middleware

    const newReview = await ReviewModel.create({
      product,
      rating,
      comment,
      user: userId,
    });
    res.status(201).json({ review: newReview });
  } catch (error) {
    res.status(500).json({ message: "Error creating review" });
  }
});

export default router;
