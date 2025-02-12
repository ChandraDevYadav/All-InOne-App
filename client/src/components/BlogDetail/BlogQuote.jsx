import { FaQuoteRight } from "react-icons/fa";

const BlogQuote = () => {
    return (
        <div className="relative">
            <div className="bg-gray-100 font-medium p-16 mt-20">
                <p className="text-gray-700 text-xl underline leading-relaxed text-center">
                    Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable.
                </p>
            </div>
            <div className="absolute -top-9 right-[45%] bg-white border-2 border-gray-100 p-5 rounded-full">
                <FaQuoteRight className="text-2xl text-red-500" />
            </div>
        </div>
    );
};

export default BlogQuote;
