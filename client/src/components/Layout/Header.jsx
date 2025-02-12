import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaList, FaUserPlus, FaSignInAlt, FaShoppingCart, FaUser, FaAngleDown, FaBlog, FaPhoneAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { BiLogOut, BiSolidPhoneCall } from "react-icons/bi";
import { useAuth } from '../../context/auth';
import { toast } from 'react-hot-toast';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import SearchDialog from '../Form/SearchDialog';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
    const [isVisible, setIsVisible] = useState(true);  // State to control visibility of the navbar
    let lastScrollY = 0;  // To track the last scroll position

    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        });
        localStorage.removeItem('auth');
        toast.success("Logout Successfully");
    };

    // Effect hook to handle scroll direction
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);  // Hide navbar when scrolling down
            } else {
                setIsVisible(true);  // Show navbar when scrolling up
            }
            lastScrollY = window.scrollY;  // Update the last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);  // Cleanup event listener on unmount
        };
    }, []);

    return (
        <>
            <nav className={`flex justify-between px-24 py-6 sticky bg-white top-0 z-50 transition-transform ${isVisible ? 'transform-none' : '-translate-y-full'}`}>
                <div className="flex items-center gap-3 text-black mr-6">
                    <img src="/online-shop.png" alt="" className='w-10 h-10' />
                    <Link to='/' className='font-bold text-lg'>ECOMMERCE APP</Link>
                </div>
                <div className="flex items-center gap-6 text-white mr-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "flex items-center gap-2 text-blue-600 border-b-2 font-medium border-blue-600 pb-1" : "flex items-center gap-2 p-2 rounded text-black hover:text-blue-600 font-medium"}>
                        <FaHome className="text-xl" />Home
                    </NavLink>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? "flex items-center gap-2 text-blue-600 border-b-2 font-medium border-blue-600 pb-1" : "flex items-center gap-2 p-2 rounded text-black hover:text-blue-600 font-medium"}>
                        <BsShop className="text-xl" />Shop
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "flex items-center gap-2 text-blue-600 border-b-2 font-medium border-blue-600 pb-1" : "flex items-center gap-2 p-2 rounded text-black hover:text-blue-600 font-medium"}>
                        <FaBlog className="text-xl" />Blog
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "flex items-center gap-2 text-blue-600 border-b-2 font-medium border-blue-600 pb-1" : "flex items-center gap-2 p-2 rounded text-black hover:text-blue-600 font-medium"}>
                        <BiSolidPhoneCall className="text-xl" />Contact Us
                    </NavLink>
                    <NavLink to="" >
                        <SearchDialog />
                    </NavLink>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="block lg:flex lg:items-center">
                    <div className="flex justify-start items-center gap-6">
                        <div className='flex justify-start items-center gap-8'>
                            <NavLink to="/cart" className={({ isActive }) => isActive ? "flex items-center gap-2 p-3 rounded-full bg-gray-300 text-black hover:bg-gray-300 hover:text-blue-600" : "flex items-center gap-2 p-3 rounded-full bg-gray-300 text-black hover:bg-gray-300 hover:text-blue-600"}>
                                <FaShoppingCart className="text-xl" />
                                <p className='absolute top-5 ml-4 bg-red-600 text-white px-1 rounded-full text-xs font-medium'>{cart?.length}</p>
                            </NavLink>
                        </div>


                        {!auth.user ? (
                            <>
                                <NavLink to="/register" className={({ isActive }) => isActive ? "flex items-center gap-2 p-3 rounded-full bg-gray-300 text-black hover:bg-gray-300 hover:text-blue-600" : "flex items-center gap-2 p-3 rounded-full bg-gray-300 text-black hover:bg-gray-300 hover:text-blue-600"}>
                                    <FaUserPlus className="text-xl" />
                                </NavLink>
                                <NavLink to="/login" className={({ isActive }) => isActive ? "flex items-center gap-2 p-3 rounded-full bg-gray-300 text-black hover:bg-gray-300 hover:text-blue-600" : "flex items-center gap-2 p-2 rounded text-black hover:bg-gray-300 hover:text-blue-600"}>
                                    <FaSignInAlt className="text-xl" />
                                </NavLink>
                            </>
                        ) : (
                            <li className="relative group list-none">
                                <NavLink href="#" className="inline-block p-3 rounded-full bg-gray-300 text-black hover:bg-gray-300 font-medium text-lg hover:text-blue-600">
                                    {auth?.user?.name}
                                </NavLink>
                                <ul className="absolute -right-20 top-full w-32 mt-3 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                                    <li>
                                        <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 hover:rounded hover:text-blue-600">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleLogout} to="/login" className={({ isActive }) => isActive ? "flex items-center gap-2 p-3 rounded-full bg-gray-300 text-black hover:bg-gray-300 hover:text-blue-600" : "flex items-center gap-2 p-2 rounded text-black hover:bg-gray-300 hover:text-blue-600"}>
                                            <BiLogOut className="text-xl text-black hover:text-blue-600 ml-2" />
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
