import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaSkype } from "react-icons/fa";

const AuthorInfo = () => {
    return (
        <div className="flex justify-start items-center gap-8 py-12">
            <div className="group w-[130px] h-[130px] relative overflow-hidden rounded-full">
                <img src="/author.jpg" alt="" className="w-full h-full rounded-full object-fill transition-transform duration-300 group-hover:scale-110 group-hover:rounded-full" />
            </div>
            <div>
                <h1 className="text-2xl font-medium">Author: Bernard Rodgers</h1>
                <p className="text-gray-500 leading-relaxed py-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <div className="flex justify-start items-center gap-3">
                    <FaFacebookF className="text-sm hover:text-blue-600" />
                    <FaInstagram className="text-sm hover:text-red-600" />
                    <FaLinkedinIn className="text-sm hover:text-cyan-600" />
                    <FaPinterest className="text-sm hover:text-yellow-600" />
                    <FaSkype className="text-sm hover:text-green-600" />
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;
