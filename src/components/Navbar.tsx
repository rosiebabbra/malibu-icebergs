import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="min-w-full flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => (window.location.href = "/")}>
                <img src="./logo.png" className="h-24" alt="Logo" />
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div
                className="md:hidden flex flex-col gap-1 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
            </div>

            {/* Navigation Links */}
            <div
                className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center md:items-center transition-all duration-300 ${isMenuOpen ? "max-h-[500px] py-4" : "max-h-0 md:max-h-full"
                    } overflow-hidden md:overflow-visible`}
            >
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Proposal", path: "/proposal" },
                    { name: "FAQs", path: "/faqs" },
                    { name: "Sustainability", path: "/sustainability" },
                    { name: "Get Involved", path: "/get-involved" },
                ].map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-sm px-4 py-2 text-black hover:bg-gray-200 transition rounded md:rounded-none md:border-none w-full md:w-auto 
                            ${isActive ? "border-b-2 font-bold text-[#32453F]" : ""}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;