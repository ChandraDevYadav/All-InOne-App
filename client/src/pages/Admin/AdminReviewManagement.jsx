import { useEffect, useState } from "react";
import axios from "axios";

const AdminReviewManagement = () => {
    const [pendingReviews, setPendingReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPendingReviews();
    }, []);

    const fetchPendingReviews = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/api/products/reviews/pending", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setPendingReviews(data);
        } catch (error) {
            console.error("Error fetching pending reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateReviewStatus = async (productId, reviewId, status) => {
        try {
            await axios.put(
                `/api/products/${productId}/reviews/${reviewId}`,
                { status },
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            setPendingReviews((prev) => prev.filter((review) => review._id !== reviewId));
        } catch (error) {
            console.error("Error updating review status:", error);
        }
    };

    if (loading) return <p>Loading pending reviews...</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Pending Reviews</h2>
            {pendingReviews.length === 0 ? (
                <p>No pending reviews.</p>
            ) : (
                <div>
                    {pendingReviews.map((review) => (
                        <div key={review._id} className="border p-3 mb-3 rounded">
                            <p><strong>Product:</strong> {review.productName}</p>
                            <p><strong>User:</strong> {review.name}</p>
                            <p><strong>Rating:</strong> {review.rating}</p>
                            <p><strong>Comment:</strong> {review.comment}</p>
                            <div className="mt-2">
                                <button
                                    onClick={() => updateReviewStatus(review.productId, review._id, "approved")}
                                    className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => updateReviewStatus(review.productId, review._id, "rejected")}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminReviewManagement;
