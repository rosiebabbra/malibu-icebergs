import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectStatus() {
    return (
        <>
            <Navbar />
            <div className="flex-1 overflow-y-auto bg-[#f6f6ef]">
                <div className="max-w-5xl mx-auto p-8">
                    {/* Section Header */}

                    {/* Fundraising Message */}
                    <div className="mt-8 text-center">
                        <p className="text-[22px] font-semibold text-gray-600">
                            We are well on our way to building Malibu Tides, but we need your support.
                        </p>
                        <p className="text-[16px] text-gray-600 mt-4 leading-relaxed">
                            Our goal is to raise <strong>$10M</strong> to bring this project to life.
                            Every contribution helps us take another step toward making this dream a reality.
                            Your support will go toward crucial construction efforts, environmental preservation, and staffing.
                            Join us in making history by creating an ocean pool that will serve Malibu for generations to come.
                            Be part of something truly special!
                        </p>
                        {/* Progress Bar */}
                        <div className="mt-10 mx-auto">
                            <ProgressBar label="$1M Raised" variant="success" now={1.75} max={10} />
                            <div className="flex justify-between text-[14px] text-gray-600 mt-2">
                                <span>$0</span>
                                <span>$10M</span>
                            </div>
                            {/* Call to Action */}
                            <div className="mt-6 text-center">
                                <button onClick={() => window.location.href = "mailto:rosiebabbra@gmail.com?subject=Malibu%20Tides%20Donation"} className="text-[18px] bg-[#57dd84] text-black font-semibold px-6 py-1 rounded-lg 
                            hover:bg-[#56ae73] transition-all duration-300 border-4 border-transparent">
                                    Donate Now
                                </button>
                            </div>
                        </div>
                        <div className="h-16"></div>
                        <div className="h-0.5 bg-[#cecbcb]"></div>
                        {/* Funding Breakdown */}
                        <div className="mt-12 text-center text-gray-700">
                            <h3 className="text-[20px] pt-6 font-semibold">How Your Contribution Helps</h3>
                            <p className="mx-auto lg:w-[768px] py-3">Every contribution you make plays a direct role in bringing Malibu Tides to life. Your donation isn't just funding a construction project—it’s investing in a lasting community space where people of all ages can safely enjoy the ocean.

                                Here’s how your support makes an impact:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 min-w-[400px]">
                                {[
                                    { title: "Excavation & Site Prep", icon: "🌍" },
                                    { title: "Pool Shell Construction", icon: "🏗️" },
                                    { title: "Filtration & Water Systems", icon: "💧" },
                                    { title: "Permits & Environmental Studies", icon: "📜" },
                                    { title: "Surrounding Amenities", icon: "🏛️" },
                                    { title: "Ongoing Maintenance & Staffing", icon: "🛠️" },
                                ].map((item, index) => (
                                    <div key={index} className="mx-auto w-full flex items-center gap-3 p-6 shadow-md rounded-lg border border-gray-200">
                                        <div className="text-[24px] mx-auto">{item.icon}
                                            <p className="font-semibold text-gray-700 mx-auto text-[16px]">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="h-56 bg-[#f6f6ef]"></div>
            <Footer />
        </>
    );
}

export default ProjectStatus;
