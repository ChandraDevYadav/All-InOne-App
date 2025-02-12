import React, { useState } from 'react'
import Layout from './../../components/Layout/Layout';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer
            }
            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }


    return (
        <Layout title={"Register - Ecommerce App"}>
            <div className='flex justify-center items-center w-full'>
                <form onSubmit={handleSubmit} className='w-[30%] border bg-white rounded shadow px-6 pb-4 mt-10'>
                    <h1 className='text-3xl font-medium text-center py-8'>Register Form</h1>
                    {/* Email Field */}
                    <div className='flex justify-start items-center gap-4'>
                        <div className="mb-4 w-full">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="Enter your name"
                                required
                            />

                        </div>
                        {/* phone field */}
                        <div className="mb-4 w-full">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                id="phone"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="Enter your phone"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    {/* Password Field */}
                    <div className="mb-4 w-full relative">
                        <input
                            type={showPassword ? "text" : "password"} // Toggle type
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
                            placeholder="Enter your password"
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-3 text-gray-400 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </span>
                    </div>
                    {/* address field */}
                    <div className="mb-4">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            id="address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                    {/* answer field */}
                    <div className="mb-4">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            id="answer"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="What is Your Favority sports"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium"
                    >
                        Submit
                    </button>
                    <div>
                        <p className='font-medium text-md text-center mt-4'>Register with:</p>
                        <div className='flex justify-center items-center gap-4 py-4'>
                            <div className='bg-gray-200 p-3 rounded-full group hover:bg-red-600'>
                                <FaGoogle className='group-hover:text-white text-red-600' />
                            </div>
                            <div className='bg-gray-200 p-3 rounded-full group hover:bg-blue-600'>
                                <FaFacebookF className='group-hover:text-white text-blue-600' />
                            </div>
                            <div className='bg-gray-200 p-3 rounded-full group hover:bg-black'>
                                <FaTwitter className='group-hover:text-white text-black' />
                            </div>
                            <div className='bg-gray-200 p-3 rounded-full group hover:bg-green-600'>
                                <FaInstagram className='group-hover:text-white text-green-600' />
                            </div>
                            <div className='bg-gray-200 p-3 rounded-full group hover:bg-cyan-700'>
                                <FaLinkedinIn className='group-hover:text-white text-cyan-600' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Register