import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import BrownStdLight from "../assets/fonts/BrownStd-Light.ttf";
import BrownStdRegular from "../assets/fonts/BrownStd-Regular.ttf";
import BrownStdBold from "../assets/fonts/BrownStd-Bold.ttf";

const injectNavbarFont = () => {
    const fontStyles = `
    @font-face {
        font-family: 'BrownStd';
        src: url(${BrownStdLight}) format('truetype');
        font-weight: 300;
    }

    @font-face {
        font-family: 'BrownStd';
        src: url(${BrownStdRegular}) format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'BrownStd';
        src: url(${BrownStdBold}) format('truetype');
        font-weight: 700;
    }
    `;

    // Avoid injecting styles multiple times
    if (!document.getElementById("navbar-font-styles")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "navbar-font-styles";
        styleSheet.type = "text/css";
        styleSheet.innerText = fontStyles;
        document.head.appendChild(styleSheet);
    }
};

// Inject the font only once when Navbar mounts
injectNavbarFont();

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => navigate("/get-involved");
    const handleNavigateOnLogoClick = () => navigate("/");

    return (
        <nav className="min-w-full flex items-center justify-between px-6 py-8 shadow-md shadow-[#CBD5E180] relative z-10 font-['BrownStd'] font-[400] uppercase">
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-6">
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Proposal", path: "/proposal" },
                ].map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-[14.4px] hover:bg-gray-200 transition rounded md:rounded-none md:border-none px-4 py-2 
                            ${isActive ? "border-b-2 text-black font-bold" : "text-[#32453F]"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* Logo (Centered) */}
            <div className="flex-shrink-0 cursor-pointer md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <img
                    src="./transparent_bg_black_logo.png"
                    onClick={handleNavigateOnLogoClick}
                    className="h-24"
                    alt="Logo"
                />
            </div>

            {/* Desktop Navigation (Right Side) */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-6">
                {[
                    { name: "Team", path: "/team" },
                    { name: "FAQs", path: "/faqs" },
                    { name: "Sustainability", path: "/sustainability" },
                ].map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-[14.4px] hover:bg-gray-200 transition rounded md:rounded-none md:border-none px-4 py-2 
                            ${isActive ? "border-b-2 text-black font-bold" : "text-[#32453F]"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
                <button
                    onClick={handleNavigate}
                    className="bg-[#e7e6d7] text-sm px-5 py-2 rounded-[19px] font-medium"
                >
                    Get Involved
                </button>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div
                className="md:hidden flex flex-col gap-1 cursor-pointer z-20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`absolute md:hidden top-full left-0 w-full bg-[#fdfcf8] shadow-md flex flex-col items-center transition-all duration-300
                ${isMenuOpen ? "max-h-[500px] py-4" : "max-h-0"} overflow-hidden`}
            >
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Proposal", path: "/proposal" },
                    { name: "Team", path: "/team" },
                    { name: "FAQs", path: "/faqs" },
                    { name: "Sustainability", path: "/sustainability" },
                    { name: "Get Involved", path: "/get-involved" },
                ].map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-sm px-4 py-2 hover:bg-gray-200 transition rounded w-full text-center
                            ${isActive ? "border-b-2 text-black font-bold" : "text-[#32453F]"}`
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
