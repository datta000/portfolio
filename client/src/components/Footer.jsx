import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center py-3 text-gray-500 text-sm h-10">
            © {new Date().getFullYear()} Ritaban Datta. All rights reserved.
        </footer>
    );
};

export default Footer;
