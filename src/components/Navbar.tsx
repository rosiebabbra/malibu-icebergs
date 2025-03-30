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
        <nav className="min-w-full flex flex-col custom:flex-row items-center justify-between px-6 py-4 shadow-md bg-[#f6f6ef] relative z-10 font-['BrownStd'] font-[400]">

            {/* Mobile Top Bar */}
            <div className="w-full flex items-center justify-between custom:hidden mb-2">
                {/* Logo Left */}
                <div onClick={handleNavigateOnLogoClick} className="cursor-pointer pl-2">
                    <img src="./malibu_tides_.png" className="h-6 lg:h-8" alt="Logo" />
                </div>

                {/* Hamburger Right */}
                <div
                    className="flex flex-col gap-1 pr-2 cursor-pointer z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-1 bg-black transition-all duration-300" />
                    <div className="w-6 h-1 bg-black transition-all duration-300" />
                    <div className="w-6 h-1 bg-black transition-all duration-300" />
                </div>
            </div>

            {/* Desktop Nav - Left */}
            <div className="hidden custom:flex flex-1 justify-start items-center gap-2 whitespace-nowrap">
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Proposal", path: "/proposal" },
                    { name: "Project Status", path: "/project-status" }
                ].map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-[15px] hover:bg-gray-200 transition rounded px-4 py-2 ${isActive ? "text-black font-bold" : "text-[#32453F]"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* Desktop Logo - centered only on desktop */}
            <div className="hidden custom:flex justify-center custom:flex-0">
                <img
                    src="./malibu_tides_.png"
                    onClick={handleNavigateOnLogoClick}
                    className="h-6 lg:h-8 cursor-pointer"
                    alt="Logo"
                />
            </div>

            {/* Desktop Nav - Right */}
            <div className="hidden custom:flex flex-1 justify-end items-center gap-2">
                {[
                    { name: "Team", path: "/team" },
                    { name: "FAQs", path: "/faqs" },
                    { name: "Sustainability", path: "/sustainability" }
                ].map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-[15px] transition rounded px-4 py-2 ${isActive ? "text-black font-bold" : "text-[#32453F]"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
                <button
                    onClick={handleNavigate}
                    className="bg-[#cdcbb6] whitespace-nowrap text-sm px-3 py-2 rounded-[19px] font-[600]"
                >
                    Get Involved
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`absolute custom:hidden top-full left-0 w-full bg-[#f6f6ef] shadow-md flex flex-col items-center transition-all duration-300 ${isMenuOpen ? "max-h-[500px] pb-2 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
            >
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Proposal", path: "/proposal" },
                    { name: "Team", path: "/team" },
                    { name: "FAQs", path: "/faqs" },
                    { name: "Sustainability", path: "/sustainability" },
                    { name: "Get Involved", path: "/get-involved" }
                ].map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-sm px-4 py-2 hover:bg-gray-200 transition rounded w-full text-center ${isActive ? "text-black font-bold" : "text-[#32453F]"}`
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
