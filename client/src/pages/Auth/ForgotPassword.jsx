import React, { useState } from 'react'
import Layout from './../../components/Layout/Layout';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password",
                { email, newPassword, answer }
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
        <Layout title={'Forgot Password - Ecommerce App'}>
            <div className='flex justify-center items-center w-full'>
                <form onSubmit={handleSubmit} className='w-[30%] border bg-white rounded shadow px-6 pb-8 mt-10'>
                    <h1 className='text-3xl font-medium text-center py-8'>Reset Password</h1>
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
                    <div className="mb-4">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            id="answer"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your favorite sport Name"
                            required
                        />
                    </div>
                    {/* Answer Field */}
                    <div className="mb-4 relative w-full">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your New Password"
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-3 text-gray-400 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium"
                    >
                        Reset
                    </button>
                    <div className='py-4 flex justify-start items-center gap-2'>
                        <p className='text-md font-medium'>Back to :</p>
                        <Link to='/login' className='text-blue-600 font-medium'>Login</Link>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword