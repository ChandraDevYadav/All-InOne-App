import React from "react";
import { Link } from "react-router-dom";
import { useBlogPostContext } from "../../context/BlogPostContext";

const BlogPostList = () => {
    const { blogPosts, loading, error } = useBlogPostContext();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Make sure blogPosts is an array before mapping over it
    if (!Array.isArray(blogPosts) || blogPosts.length === 0) {
        return <div>No blog posts available.</div>;
    }

    return (
        <div className="blog-post-list">
            {blogPosts.map((post) => (
                <div key={post._id} className="blog-post-card">
                    <img
                        src={`http://localhost:8080/api/v1/blog/blog-photo/${post._id}`}
                        alt={post.title}
                    />
                    <h2>{post.title}</h2>
                    <p>{post.content.slice(0, 100)}...</p>
                    <Link to={`/blog/${post.slug}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;
