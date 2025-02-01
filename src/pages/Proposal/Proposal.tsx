import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

import React from "react";

type Facility = {
    title: string;
    imgPath: string;
    description: string;
};

const facilities: Facility[] = [
    {
        title: "Olympic-Sized Lap Pool",
        imgPath: "./lap_pool.jpg",
        description:
            "A 50-meter saltwater pool naturally replenished by ocean waves."
    },
    {
        title: "Relaxed Swimming Pool",
        imgPath: "./relaxed_pool.jpg",
        description:
            "A family-friendly pool with a gradual entry design."
    },
    {
        title: "Restaurant",
        imgPath: "./resto.png",
        description:
            "A high-end dining experience featuring fresh, locally sourced seafood and organic produce, with stunning ocean views.",
    },
    {
        title: "Café & Coffee Shop",
        imgPath: "./cafe.png",
        description:
            "A casual, all-day café serving specialty coffee, organic teas, fresh juices, and light meals in a relaxed oceanfront setting.",
    },
    {
        title: "Coworking Space",
        imgPath: "./coworking.jpg",
        description:
            "A modern, open office plan ocean-view workspace, designed for freelancers and remote workers.",
    },
];

const FacilityCard: React.FC<Facility> = ({ title, description, imgPath }) => {
    return (
        <div className="bg-white shadow-lg px-6 py-4 space-y-2 flex flex-col items-center rounded-lg text-center border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="text-sm font-semibold">{title}</h3>

            <img
                src={imgPath}
                alt={title}
                className="w-50 h-50 object-contain"
            />

            <div className="text-sm text-gray-600">{description}</div>
        </div>
    );
};


const FacilitiesSection: React.FC = () => {
    return (
        <section className="py-12 bg-[#3b98982f]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <FacilityCard key={index} {...facility} />
                    ))}
                </div>
            </div>
        </section>
    );
};

function Proposal() {
    return (
        <>
            {/* Fixed Navbar */}
            <div className="top-0 w-full z-50">
                <Navbar />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6">
                {/* Adjust `mt-[80px]` based on the navbar height */}
                <div className="max-w-4xl mx-auto p-6">
                    <div className="my-6 px-6 py-6 bg-white rounded-[29px] shadow-lg">
                        <h1 className="text-xl font-bold text-start mb-2">Facilities</h1>
                        <div className="flex flex-col items-center">
                            <FacilitiesSection />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Proposal;
