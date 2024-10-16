// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle the menu toggle
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu
    };

    return (
        <header className="sticky top-0 z-50 shadow">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 transition-transform duration-200 hover:scale-105" // Added hover effect
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2 ">
                        {/* Always show Log in and Get Started buttons */}
                        <div className="hidden lg:block ">
                        <NavLink
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                        >
                            Log in
                        </NavLink>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                        >
                            Get started
                        </Link>  </div>
                        {/* Menu toggle button for mobile */}
                        <button
                            className="inline-flex p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            onClick={handleMenuToggle}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={handleMenuToggle} // Close menu on click
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'}
                                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={handleMenuToggle} // Close menu on click
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'}
                                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={handleMenuToggle} // Close menu on click
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text-gray-700'}
                                    lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        {/* Always show Log in and Get Started buttons in the mobile menu */}
                        <div className="mt-4 lg:hidden">
                            {/* Log in Button */}
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `block text-gray-700   focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 
            ${isActive ? 'text-orange-600' : ''}`
                                }
                                onClick={handleMenuToggle} // Close menu on click
                            >
                                Log in
                            </NavLink>

                            {/* Get Started Button */}
                            <Link
                                to="#"
                                className="block mt-4 text-white bg-orange-700  hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-3"
                                onClick={handleMenuToggle} // Close menu on click
                            >
                                Get started
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
}
