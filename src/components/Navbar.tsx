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

    if (!document.getElementById("navbar-font-styles")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "navbar-font-styles";
        styleSheet.type = "text/css";
        styleSheet.innerText = fontStyles;
        document.head.appendChild(styleSheet);
    }
};

injectNavbarFont();

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => navigate("/get-involved");
    const handleNavigateOnLogoClick = () => navigate("/");

    return (
        <nav className="min-w-full flex flex-wrap items-center justify-between px-6 py-4 shadow-md bg-[#f6f6ef] relative z-10 font-['BrownStd'] font-[400]">
            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden flex flex-col gap-1 cursor-pointer z-50 absolute right-6 top-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
                <div className="w-6 h-1 bg-black transition-all duration-300"></div>
            </div>

            {/* Left-side navigation */}
            <div className="hidden md:flex flex-1 justify-start items-center gap-4 md:gap-6">
                {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Proposal", path: "/proposal" }, { name: "Project Status", path: "/project-status" }].map((link) => (
                    <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-[15px] hover:bg-gray-200 transition rounded px-4 py-2 ${isActive ? "text-black font-bold" : "text-[#32453F]"}`}>
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex">
                <img src="./malibu_tides_.png" onClick={handleNavigateOnLogoClick} className="h-6 lg:h-8" alt="Logo" />
            </div>

            {/* Right-side navigation */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-4 md:gap-6">
                {[{ name: "Team", path: "/team" }, { name: "FAQs", path: "/faqs" }, { name: "Sustainability", path: "/sustainability" }].map((link) => (
                    <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-[15px] transition rounded px-4 py-2 ${isActive ? "text-black font-bold" : "text-[#32453F]"}`}>
                        {link.name}
                    </NavLink>
                ))}
                <button onClick={handleNavigate} className="bg-[#cdcbb6] text-sm px-3 py-2 rounded-[19px] font-[600]">Get Involved</button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`absolute md:hidden top-full left-0 w-full bg-[#f6f6ef] shadow-md flex flex-col items-center transition-all duration-300 ${isMenuOpen ? "max-h-[500px] pb-3 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                {[{ name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Proposal", path: "/proposal" },
                { name: "Team", path: "/team" },
                { name: "FAQs", path: "/faqs" },
                { name: "Sustainability", path: "/sustainability" },
                { name: "Get Involved", path: "/get-involved" }].map(
                    (link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={
                                ({ isActive }) =>
                                    `text-sm px-4 py-2 hover:bg-gray-200 transition rounded w-full text-center ${isActive ? "text-black font-bold" : "text-[#32453F]"}`
                            }>
                            {link.name}
                        </NavLink>
                    ))}
            </div>
        </nav>
    );
};

export default Navbar;
