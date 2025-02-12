import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Layout from './../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password });
            if (res && res.data.success) {
                toast.success(res.data.message);
                setAuth({ ...auth, user: res.data.user, token: res.data.token });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title={"Login - Ecommerce App"}>
            <div className='flex justify-center items-center w-full'>
                <form onSubmit={handleSubmit} className='w-[30%] border bg-white rounded shadow px-6 pb-4 mt-10'>
                    <h1 className='text-3xl font-medium text-center py-8'>Login Form</h1>

                    {/* Email Field */}
                    <div className="mb-4 w-full">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field with Toggle Visibility */}
                    <div className="mb-4 w-full relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
                            placeholder="Enter your password"
                            required
                        />
                        <span
                            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Forgot Password */}
                    <div className='flex justify-end pb-4'>
                        <button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            className="text-blue-600 font-medium text-sm"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium"
                    >
                        Login
                    </button>
                    <div>
                        <p className='font-medium text-md text-center mt-4'>Login with:</p>
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
    );
};

export default Login;
