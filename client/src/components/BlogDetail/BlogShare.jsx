import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaSkype } from "react-icons/fa";

const BlogShare = () => {
    return (
        <div className="flex justify-start items-center gap-4 mt-8">
            <p className="font-semibold text-md">SHARE:</p>
            <button className="text-gray-800 border-b-2 border-gray-600 text-md hover:text-red-500 hover:border-red-500">Facebook</button>
            <button className="text-gray-800 border-b-2 border-gray-600 text-md hover:text-red-500 hover:border-red-500">Linkedin</button>
            <button className="text-gray-800 border-b-2 border-gray-600 text-md hover:text-red-500 hover:border-red-500">Twitter</button>
            <button className="text-gray-800 border-b-2 border-gray-600 text-md hover:text-red-500 hover:border-red-500">Pinterest</button>
        </div>
    );
};

export default BlogShare;
