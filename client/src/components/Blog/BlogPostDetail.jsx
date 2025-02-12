import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPostDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchBlogPost = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/blog/get-blog-post/${slug}`);
            setPost(data.blogPost);
            setLoading(false);
        } catch (err) {
            setError("Error fetching the blog post");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogPost();
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="blog-post-detail">
            <h1>{post.title}</h1>
            <img src={`http://localhost:8080/api/v1/blog/blog-photo/${post._id}`} alt={post.title} />
            <p>{post.content}</p>
        </div>
    );
};

export default BlogPostDetail;
