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
            "A family-friendly pool with a gentle, gradual entry, perfect for beginner swimmers."
    },
    {
        title: "Restaurant",
        imgPath: "./malibu+farm.jpg",
        description:
            "A high-end dining experience featuring fresh, locally sourced seafood and organic produce.",
    },
    {
        title: "Café & Coffee Shop",
        imgPath: "./pexels-orlovamaria-4906513.jpg",
        description:
            "A casual, all-day café serving specialty coffee, organic teas, fresh juices, and light meals.",
    },
    {
        title: "Coworking Space",
        imgPath: "./pexels-anastasia-shuraeva-7279327.jpg",
        description:
            "A modern, open office plan ocean-view workspace designed to unlock .",
    },
];

const FacilityCard: React.FC<Facility> = ({ title, description, imgPath }) => {
    return (
        <div className="bg-[#4a80801a] rounded-[19px] shadow-lg px-6 py-4 space-y-2 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition duration-300 md:w-96">
            <h3 className="text-sm font-semibold">{title}</h3>

            <img
                src={imgPath}
                alt={title}
                className="w-full h-96 object-cover rounded-lg"
            />

            <div className="text-sm text-gray-600">{description}</div>

        </div>
    );
};



const FacilitiesSection: React.FC = () => {
    return (
        <section className="pt-6 pb-2 w-full">
            <div className="max-w-5xl mx-auto px-6">
                <div className="w-full max-w-full md:overflow-x-auto scrollbar-hide pb-5">
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
                    <div className="my-6 px-6 pt-10">
                        <div>
                            <h2 className="text-xl font-semibold text-start pb-2">Proposed Concept & Facilities</h2>
                            <p className="text-md pb-12">Discover a thoughtfully designed space that blends comfort, convenience, and breathtaking oceanfront views.
                                Enjoy a seamless balance of relaxation and productivity.</p>
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
