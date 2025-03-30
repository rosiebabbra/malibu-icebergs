import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
import { useState, useEffect } from "react";


function Sustainability() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        let ticking = false; // Prevents redundant executions

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const maxFadeHeight = window.screen.height / 3; // Reduce this for faster fade-out
                    const opacity = Math.max(1 - scrollY / maxFadeHeight, 0);

                    const gradientOverlay = document.getElementById("gradient-overlay");
                    if (gradientOverlay) {
                        gradientOverlay.style.opacity = opacity.toString();
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sustainabilityBlock = () =>
        <div className="flex flex-col items-center my-6 px-2 py-6">
            {!imageLoaded && (
                <div className="flex justify-center items-center h-screen w-screen bg-[#f6f6ef]">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Image (Always on Top) */}
            <div className="relative w-full mb-4">
                {/* <h2 className="text-2xl font-semibold text-black">Sustainability</h2>
                <h2 className="text-lg font-medium text-gray-800 mt-1 mb-4">
                    Creating a Better World by Revolutionizing Marine Habitats
                </h2> */}
                <div className="pb-6 text-center">
                    <p className="text-gray-700 font-semibold text-[28px]">
                        Our vision is clear.
                    </p>
                    <p className="px-2 text-lg text-center text-gray-800">We believe in a future where human ingenuity and environmental stewardship work hand in hand to ensure that the ocean—and all life within it—continues to thrive.</p>
                </div>
                <div className="relative w-full overflow-hidden rounded-[29px]">
                    <img
                        src="./sustainability.png"
                        alt="Sustainability"
                        className="w-full h-full object-cover"
                        title="Source: https://www.pexels.com/@francesco-ungaro/"
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div id="gradient-overlay" className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300"></div>
                </div>
            </div>



            {/* Text Content Below the Image */}
            <div className="w-full text-left md:text-left p-8 bg-[#fdfcf823] rounded-[29px] shadow-2xl">
                <p className="text-gray-800 mt-2 mb-4">
                    Malibu Icebergs is committed not only to preserving the health of the ocean for its diverse marine inhabitants but also to actively enhancing it through innovative and sustainable solutions. We recognize that true conservation goes beyond protection—it requires action, innovation, and collaboration to restore and improve the ecosystems we rely on.
                </p>
                <p className="text-gray-800 mb-4">
                    To achieve this, we look towards leaders in material ecology—visionaries who integrate science, design, and sustainability to create solutions that benefit both human and marine life. One such pioneering initiative is&nbsp;
                    <a className="text-blue-500 inline-flex items-center" href='https://www.livingseawalls.com.au/' rel="noreferrer" target="_blank">
                        Living Seawalls
                        <span className="material-icons text-base mb-1 ml-1 align-middle">open_in_new</span>
                    </a>,
                    who design and implement biologically enhanced marine structures that not only protect coastlines but also create thriving habitats for marine organisms.
                </p>
                <p className="text-gray-800 mb-4">
                    Inspired by these advancements, Malibu Icebergs aims to incorporate cutting-edge sustainable materials and eco-conscious engineering into our designs. By doing so, we strive to build a space that not only coexists with the natural environment but actively contributes to its regeneration and biodiversity.
                </p>
                <p>Our vision is to redefine the relationship between human development and marine ecosystems, proving that innovation and sustainability can work in harmony. By leveraging science, design, and environmental responsibility, Malibu Icebergs is committed to shaping a future where our oceans are not just protected, but revitalized for generations to come.</p>
            </div>
        </div>;

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6">
                {sustainabilityBlock()}
            </div>
            <div className="h-56"></div>
            <Footer />
        </>
    );
}

export default Sustainability;
