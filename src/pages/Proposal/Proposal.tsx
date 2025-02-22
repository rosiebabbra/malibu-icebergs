import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
import React, { useEffect, useRef, useState } from "react";

type Facility = {
    title: string;
    imgPath: string;
    imgSource: string;
    description: string;
};

const facilities: Facility[] = [
    {
        title: "Olympic-Sized Lap Pool",
        imgPath: "./pexels-kalia-chan-5079244-5915186.jpg",
        imgSource: "https://www.pexels.com/photo/man-in-shorts-walking-by-swimming-pool-4142815/",
        description:
            "A 50-meter saltwater pool naturally replenished by ocean waves."
    },
    {
        title: "Relaxed Swimming Pool",
        imgPath: "./pexels-matthardy-2109739.jpg",
        imgSource: "https://www.pexels.com/photo/grey-railings-on-rock-near-body-of-water-2109739/",
        description:
            "A family-friendly pool with a gentle, gradual entry, perfect for beginner swimmers."
    },
    {
        title: "Restaurant",
        imgPath: "./resto.webp",
        imgSource: "https://www.thesurfridermalibu.com/restaurant",
        description:
            "A high-end dining experience featuring fresh, locally sourced seafood and organic produce.",
    },
    {
        title: "Café & Coffee Shop",
        imgPath: "./pexels-lina-5328302.jpg",
        imgSource: "https://www.pexels.com/photo/photo-of-white-and-light-blue-colored-cafe-bar-5328302/",
        description:
            "A casual, all-day café serving specialty coffee, organic teas, fresh juices, and light meals.",
    },
    {
        title: "Coworking Space",
        imgPath: "./pexels-andrew-2682452.jpg",
        imgSource: "https://www.pexels.com/photo/woman-in-gray-jacket-sitting-beside-desk-2682452/",
        description:
            "A modern, open-office-plan ocean-view workspace designed to unlock creativity and productivity.",
    },
];

const FacilityCard: React.FC<Facility> = ({ title, description, imgPath, imgSource }) => {
    return (
        <div className="bg-[#c8c7af3f] rounded-[19px] shadow-lg px-6 py-4 space-y-2 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition duration-300 min-w-[280px] md:min-w-[320px] lg:min-w-[380px]">
            <h3 className="text-sm font-semibold">{title}</h3>

            <img
                src={imgPath}
                alt={title}
                title={`Source: ${imgSource}`}
                className="h-96 w-72 object-cover rounded-lg"
            />

            <div className="text-sm text-gray-600">{description}</div>
        </div>
    );
};


const FacilitiesSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const atStart = scrollContainer.scrollLeft === 0;
        const atEnd =
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth;

        const handleWheelScroll = (event: WheelEvent) => {
            if (isHovered) {
                event.preventDefault(); // Prevent default vertical scroll
                scrollContainer.scrollLeft += event.deltaY; // Convert vertical scroll to horizontal
            }

            if (atStart) {
                window.scrollBy(0, event.deltaX);
            }
            if (atEnd && event.deltaY > 0) {
                document.body.style.overflow = "auto"; // Allow vertical scrolling downward
            }

        };

        window.addEventListener("wheel", handleWheelScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheelScroll);
        };
    }, [isHovered]);

    return (
        <section
            className="pt-6 pb-2 w-full scrollbar-hide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                ref={scrollContainerRef}
                className="w-full flex flex-col items-center gap-8 md:flex-row md:overflow-x-auto md:flex-nowrap pb-12 scrollbar-hide"
            >
                {facilities.map((facility, index) => (
                    <FacilityCard key={index} {...facility} />
                ))}
            </div>

        </section>
    );
};


function Proposal() {
    return (
        <>
            <Navbar />
            <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="max-w-5xl mx-auto p-6 scrollbar-hide">
                    <div className="my-6 px-6 pt-4 scrollbar-hide">
                        <div className="pb-6">
                            <h2 className="text-[24px] font-bold text-center pb-2 text-gray-700">Our Vision</h2>
                            <h2 className="text-center text-[16px]  pb-4 text-gray-700">A Space for Wellness, Community & Innovation</h2>
                            <p className="text-[16px] text-center text-gray-600">
                                Discover a thoughtfully curated space that blends comfort, convenience, and breathtaking oceanfront views. Designed to promote both physical and mental well-being, this serene setting fosters relaxation, reduces stress, and enhances overall public health—offering a seamless balance of rejuvenation and productivity.</p>
                        </div>
                        <div className="flex flex-col items-center scrollbar-hide">
                            <FacilitiesSection />
                        </div>
                    </div>
                </div>

            </div>
            <div className="h-56 "></div>
            <Footer />
        </>
    );
}

export default Proposal;
