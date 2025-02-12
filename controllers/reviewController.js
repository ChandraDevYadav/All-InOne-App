import Review from "../models/reviewModel.js";

// ➤ Add a review (Only one review per user per product)
export const addReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const userId = req.user.id; // Assuming user is authenticated

    // Check if user has already reviewed this product
    const existingReview = await Review.findOne({ user: userId, product });
    if (existingReview) {
      return res
        .status(400)
        .json({ message: "You can only add one review per product." });
    }

    const review = new Review({ user: userId, product, rating, comment });
    await review.save();

    res.status(201).json({ message: "Review added successfully!", review });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ➤ Get all reviews for a product
export const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId }).populate(
      "user",
      "name"
    );
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ➤ Delete review (only by user who created it)
export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user.id; // Assuming authentication middleware

    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (review.user.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Review.findByIdAndDelete(reviewId);
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
