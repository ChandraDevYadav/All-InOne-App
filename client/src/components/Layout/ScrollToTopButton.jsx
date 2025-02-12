import React, { useState, useEffect } from 'react';
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll events
    const handleScroll = () => {
        // Check if we're at the top of the page
        if (window.scrollY > 200) {
            setIsVisible(true); // Show the button after scrolling 200px
        } else {
            setIsVisible(false); // Hide the button at the top of the page
        }
    };

    // Scroll to the top
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={handleScrollToTop}
                className="fixed bottom-6 right-6 bg-red-300 border-2 border-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                aria-label="Scroll to top"
            >
                <HiArrowUp className='text-2xl' />
            </button>
        )
    );
};

export default ScrollToTopButton;
