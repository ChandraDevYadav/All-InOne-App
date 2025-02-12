import React from "react";
import { FaUser, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "From Now We Are Certified Web",
        author: "Jenny Watson",
        date: "24 Jun 2023",
        comments: 35,
        image: "/sh1.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.",
    },
    {
        id: 2,
        title: "Top 10 Marketing for Improving Sales",
        author: "Jenny Watson",
        date: "18 Jul 2023",
        comments: 21,
        image: "/sh2.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.",
    },
    {
        id: 3,
        title: "The Future of Web Development",
        author: "Jenny Watson",
        date: "05 Aug 2023",
        comments: 12,
        image: "/sh3.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.",
    },
];

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-12">
            {blogPosts.map((post) => (
                <div key={post.id} className="overflow-hidden">
                    <div className="group w-full h-[500px] relative overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="pt-8">
                        <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                            <div className="flex items-center gap-2">
                                <FaUser />
                                <span className="font-medium">By {post.author}</span>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <div className="w-2 h-2 rounded-3xl bg-red-600"></div>
                                <span className="font-medium">{post.comments} Comments</span>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <div className="w-2 h-2 rounded-3xl bg-red-600"></div>
                                <span className="font-medium">{post.date}</span>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold my-4">{post.title}</h3>
                        <p className="text-gray-700 font-medium">{post.description.substring(0, 220)}...</p>
                        <Link
                            to={`/blog/${post.id}`}
                            className="text-red-600 font-medium mt-3 inline-block"
                        >
                            READ MORE...
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
