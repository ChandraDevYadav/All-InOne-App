import React from "react";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaQuoteRight, FaSkype, FaUser } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import Profile from "../components/Blog/Profile";
import ImageGallery from "../components/BlogDetail/ImageGallery";
import BlogQuote from "../components/BlogDetail/BlogQuote";
import BlogShare from "../components/BlogDetail/BlogShare";
import AuthorInfo from "../components/BlogDetail/AuthorInfo";
import BlogButton from "../components/BlogDetail/BlogButton";
import CommentSec from "../components/BlogDetail/CommentSec";
import CommentForm from "../components/BlogDetail/CommentForm";

const blogPosts = [
    {
        id: 1,
        title: "From Now We Are Certified Web",
        author: "Jenny Watson",
        date: "24 Jun 2023",
        comments: 35,
        image: "/sh1.jpg",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.",
    },
    {
        id: 2,
        title: "Top 10 Marketing for Improving Sales",
        author: "Jenny Watson",
        date: "18 Jul 2023",
        comments: 21,
        image: "/sh2.jpg",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.",
    },
    {
        id: 3,
        title: "The Future of Web Development",
        author: "Jenny Watson",
        date: "05 Aug 2023",
        comments: 12,
        image: "/sh3.jpg",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.",
    },
];

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogPosts.find((post) => post.id === Number(id));

    if (!blog) {
        return <p className="text-center text-xl">Blog not found.</p>;
    }

    return (
        <Layout>
            <div className='grid grid-cols-6 gap-20 px-24 pt-14 bg-white'>
                <div className='col-span-4'>
                    <div className="">
                        <div className="group w-full h-[500px] relative overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="pt-8">
                            <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                                <div className="flex items-center gap-2">
                                    <FaUser />
                                    <span className="font-medium">By {blog.author}</span>
                                </div>
                                <div className="flex justify-start items-center gap-3">
                                    <div className="w-2 h-2 rounded-3xl bg-red-600"></div>
                                    <span className="font-medium">{blog.comments} Comments</span>
                                </div>
                                <div className="flex justify-start items-center gap-3">
                                    <div className="w-2 h-2 rounded-3xl bg-red-600"></div>
                                    <span className="font-medium">{blog.date}</span>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                        <p className="text-gray-700 leading-loose">{blog.description}</p>
                    </div>
                    <BlogQuote />
                    <p className="my-10 leading-loose text-gray-600">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="group w-full h-[300px] relative overflow-hidden">
                            <ImageGallery />
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-4 mt-20 pb-8 border-b border-red-600">
                        <p className="font-semibold text-md">SHARE:</p>
                        <button className="text-black bg-blue-200 px-6 py-1 text-[13px] rounded hover:text-red-500">PLANNING</button>
                        <button className="text-black bg-blue-200 px-6 py-1 text-[13px] rounded hover:text-red-500">INDUSTRIAL</button>
                        <button className="text-black bg-blue-200 px-6 py-1 text-[13px] rounded hover:text-red-500">CREATIVE</button>
                    </div>
                    <BlogShare />
                    <AuthorInfo />
                    <BlogButton />
                    <CommentSec />
                    <CommentForm />
                </div>
                <div className='col-span-2'>
                    <Profile />
                </div>
            </div>

        </Layout>
    );
};

export default BlogDetail;