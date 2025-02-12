import React, { useState } from "react";
import axios from "axios";

const CreateBlogPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState(null);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("photo", photo);

        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/blogs/create-blog-post",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            setMessage("Blog post created successfully");
        } catch (err) {
            setMessage(err.response?.data?.error || "Error creating blog post");
        }
    };

    return (
        <div className="create-blog-post">
            <h1>Create Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    required
                />
                <button type="submit">Create Post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateBlogPost;
