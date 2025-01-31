import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo"; // Import the logo component

// Constants for navigation links
const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Skills", path: "/skills" },
    { name: "My Projects", path: "/projects" },
    { name: "Get in Touch", path: "/contact" },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [logoSize, setLogoSize] = useState(48);

    // Adjust logo size based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setLogoSize(36); // Smaller logo for mobile
            } else if (window.innerWidth < 1024) {
                setLogoSize(44); // Medium logo for tablets
            } else {
                setLogoSize(48); // Default logo size for desktops
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial size
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50 shadow-md">
            <nav className="container mx-auto flex justify-between items-center px-6 py-4 transition-all duration-300">
                {/* Logo */}
                <div className="flex items-center whitespace-nowrap transition-all duration-300">
                    <a href="/">
                        <Logo size={logoSize} />
                    </a>
                </div>

                {/* Desktop Links (only for large and above) */}
                <ul className="hidden lg:flex space-x-8 text-lg ml-auto transition-all duration-300">
                    {NAV_LINKS.map((link, index) => (
                        <li key={index} className="whitespace-nowrap">
                            <NavLink
                                to={link.path}
                                end
                                className={({ isActive }) =>
                                    `relative px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 ${
                                        isActive ? "bg-gray-800 text-blue-500" : ""
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile and Medium Menu */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl focus:outline-none transition-all duration-300"
                        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <div
                            className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col px-6 py-4 space-y-4 shadow-lg transition-all duration-300"
                            style={{ zIndex: 50 }}
                        >
                            {NAV_LINKS.map((link, index) => (
                                <div key={index} className="block whitespace-nowrap">
                                    <NavLink
                                        to={link.path}
                                        end
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 ${
                                                isActive ? "bg-gray-800 text-blue-500" : ""
                                            }`
                                        }
                                        onClick={() => setMenuOpen(false)} // Close menu on selection
                                    >
                                        {link.name}
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
