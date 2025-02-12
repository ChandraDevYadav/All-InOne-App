import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import SearchInput from './SearchInput';

const SearchDialog = () => {
    const [isAlertOpen, setIsAlertOpen] = useState(false); // State to control the alert dialog visibility
    const [isSearchIcon, setIsSearchIcon] = useState(true); // State to toggle between search and close icons

    const toggleAlert = () => {
        setIsAlertOpen(!isAlertOpen); // Toggle alert dialog visibility
        setIsSearchIcon(!isSearchIcon); // Toggle button icon
    };

    return (
        <div className="relative">
            {/* Header Close Button (always visible) */}
            <button
                onClick={toggleAlert}
                className="text-black hover:text-gray-700 absolute -top-5 z-50"
            >
                {/* Show Search Icon or Close Icon based on state */}
                {isSearchIcon ? (
                    <p className='flex justify-start items-center gap-2 font-medium px-4 py-2 border rounded'><FaSearch /> Search</p>
                ) : (
                    <IoCloseSharp className='text-xl mt-3' />
                )}
            </button>

            {/* Alert Dialog */}
            {isAlertOpen && (
                <div className="fixed top-[94px] right-[11.5rem] flex w-80 justify-center items-center z-40">
                    <div className="bg-white p-6 rounded shadow-lg w-full relative">
                        <SearchInput />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchDialog;
