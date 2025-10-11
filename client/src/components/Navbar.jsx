import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/work', label: 'Work' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="flex justify-center sticky top-0 z-50 gap-4 ">
            <div className=" bg-gray-800 rounded-full h-11 px-1 py-2.5 mt-1">

                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-full transition-colors duration-300 
                        ${isActive
                                ? 'bg-purple-600 text-white font-bold'
                                : 'text-gray-200 hover:text-white'}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
