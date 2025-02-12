import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

function About() {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center max-w-5xl mx-auto py-12">
                    {/* Text Side */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">Who We Are</h2>
                        <p className="text-gray-600 mt-4">
                            Ocean pools have been described as a spiritual experience. They have become popularized in Australian culture and brought to numerous countries across the globe but have yet to be introduced in California.
                        </p>

                        <p className="text-gray-600 mt-4">Malibu Icebergs is a community-led proposal and public health initiative with the goal of developing an ocean pool on the Malibu landscape.
                            The introduction of such a facility brings something entirely new to the region: a unique
                            recreational experience with the iconic allure of Malibu.</p>
                        <div className="text-left pt-5 text-gray-600 text-sm">- Rosie Babbra, Founder</div>
                    </div>

                    {/* Image Side */}
                    <div>
                        <img src="./icebergs_2.png" className="rounded-md shadow-lg lg:max-h-96 lg:float-end" alt="Ocean Pool" />
                    </div>
                </div>
                <div className="w-4xl h-0.5 bg-[#4a78781c] mb-20 mt-10"></div>
                <div className="mx-auto">
                    <p className="font-semibold text-2xl pt-3">Our Mission</p>
                    <p className="mt-2 text-gray-700 pb-3">
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
