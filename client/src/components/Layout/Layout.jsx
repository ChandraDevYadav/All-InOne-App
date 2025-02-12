import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast"
import ScrollToTopButton from './ScrollToTopButton';
import MainFooter from './MainFooter';

const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div className='bg-[#f2f2f2]'>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main className=''>
                <Toaster />
                {children}
            </main>
            <ScrollToTopButton />
            <MainFooter />
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Ecommerce App - shop now',
    description: 'MERN Stack Project',
    keywords: 'mern,react,node,mongodb',
    author: 'CodeHustler'
};

export default Layout