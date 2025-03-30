import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

function About() {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-[24px] pt-12 font-semibold text-gray-700 text-center">Where Innovation Meets Nature</h2>
                <p className="text-gray-600 mt-1 pt-3 text-center text-[16px]">
                    An <b>ocean pool</b> is a fascinating convergence of a man-made pool and seawater, built along the coastline to provide a safer swimming environment while still being connected to the ocean.
                    They became popularized in Australian culture and brought to numerous countries across the globe but have yet to be introduced in California.
                </p>
                <div className="items-center max-w-5xl mx-auto pt-10">

                    <div className="aspect-[16/13] md:aspect-[16/13] w-full">
                        <img
                            src="./icebergs_2.png"
                            className="w-full h-full object-cover object-top  rounded-[29px] shadow-2xl"
                            alt="Source: https://icebergs.com.au/icebergs-club/"
                            title="Source: https://icebergs.com.au/icebergs-club/"
                        />
                    </div>
                    <div>

                        <p className="text-gray-600 mt-14 text-[16px] text-center">
                            Malibu Icebergs is a community-led proposal and public health initiative with the goal of developing an ocean pool on the Malibu landscape.
                            The introduction of such a facility brings something entirely new to the region: a unique
                            recreational experience with the iconic allure of Malibu.</p>

                    </div>
                </div>
                <div className="h-16"></div>
                <div className="h-0.5 bg-[#cecbcb]"></div>
                <div className="h-16"></div>
                <div className="mx-auto  shadow-lg rounded-[29px] py-12 px-6">
                    <p className="font-semibold text-2xl text-center text-gray-700">Our Mission</p>
                    <p className="mt-2 text-gray-600 pb text-center">
                        Ocean pools enhance public health by offering ocean access while safeguarding swimmers from rocks and hazardous marine life. They provide an authentic open-water swimming experience within a controlled setting.
                        With sustainable design and accessibility as core tenets, the ocean pool will seamlessly integrate
                        with Malibu’s natural beauty, offering a safe and environmentally conscious way to enjoy ocean swimming.
                        <br /><br />
                        Featuring a stunning, architecturally designed structure that blends with the landscape, the pool will
                        provide year-round access to a quintessentially Californian experience while promoting public health
                        by encouraging physical activity and providing a safe alternative to open-water swimming.
                    </p>
                </div>
            </div>
            <div className="h-56 "></div>
            <Footer />
        </>
    );
}

export default About;
