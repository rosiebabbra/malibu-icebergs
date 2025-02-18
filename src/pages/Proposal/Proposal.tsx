import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

import React from "react";

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
        imgSource: "https://www.pexels.com/search/coffee%20shop%20bright/",
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
        <div className="bg-[#c8c7af3f] rounded-[19px] shadow-lg px-6 py-4 space-y-2 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition duration-300 md:w-96">
            <h3 className="text-sm font-semibold">{title}</h3>

            <img
                src={imgPath}
                alt={title}
                title={`Source: ${imgSource}`}
                className="h-96 min-w-[250px] max-w-[250px] object-cover rounded-lg"
            />

            <div className="text-sm text-gray-600">{description}</div>

        </div>
    );
};



const FacilitiesSection: React.FC = () => {
    return (
        <section className="pt-6 pb-2 w-full">
            <div className="max-w-5xl mx-auto px-6">
                <div className="w-full max-w-full md:overflow-x-auto scrollbar-hide pb-12">
                    <div className="flex flex-col items-center gap-6 md:inline-flex md:flex-row md:gap-8">
                        {facilities.map((facility, index) => (
                            <FacilityCard key={index} {...facility} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};




function Proposal() {
    return (
        <>
            <Navbar />
            <div className="flex-1 overflow-y-auto">
                <div className="max-w-5xl mx-auto p-6">
                    <div className="my-6 px-6 pt-4">
                        <div className="pb-6">
                            <h2 className="text-[24px] font-bold text-center pb-2 text-gray-700">Our Vision</h2>
                            <h2 className="text-center text-[16px]  pb-4 text-gray-700">A Space for Wellness, Community & Innovation</h2>
                            <p className="text-[16px] text-center text-gray-600">
                                Discover a thoughtfully curated space that blends comfort, convenience, and breathtaking oceanfront views. Designed to promote both physical and mental well-being, this serene setting fosters relaxation, reduces stress, and enhances overall public health—offering a seamless balance of rejuvenation and productivity.</p>
                        </div>
                        <div className="flex flex-col items-center">
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
