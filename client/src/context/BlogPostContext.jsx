import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const BlogPostContext = createContext();

export const BlogPostProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch all blog posts
    const fetchBlogPosts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/api/blog/get-blog-post");
            setBlogPosts(data.blogPosts);
            setLoading(false);
        } catch (err) {
            setError("Error fetching blog posts");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    return (
        <BlogPostContext.Provider value={{ blogPosts, loading, error }}>
            {children}
        </BlogPostContext.Provider>
    );
};

export const useBlogPostContext = () => {
    return React.useContext(BlogPostContext);
};
