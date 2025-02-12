import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

function Sustainability() {
    const sustainabilityBlock = () =>
        <div className="flex flex-col items-center my-6 px-6 py-6">

            {/* Image (Always on Top) */}
            <div className="w-full mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Sustainability</h2>
                <h2 className="text-lg font-medium text-gray-900 mt-1 mb-4">
                    Creating a Better World by Revolutionizing Marine Habitats
                </h2>
                <img
                    src="./sustainability.png"
                    alt="Sustainability"
                    className="rounded-lg w-full object-cover"
                />
            </div>

            {/* Text Content Below the Image */}
            <div className="w-full text-left md:text-left">
                <p className="text-gray-700 mt-2 mb-4">
                    Malibu Icebergs is committed not only to preserving the health of the ocean for its diverse marine inhabitants but also to actively enhancing it through innovative and sustainable solutions. We recognize that true conservation goes beyond protection—it requires action, innovation, and collaboration to restore and improve the ecosystems we rely on.
                </p>
                <p className="text-gray-700 mb-4">
                    To achieve this, we look towards leaders in material ecology—visionaries who integrate science, design, and sustainability to create solutions that benefit both human and marine life. One such pioneering initiative is&nbsp;
                    <a className="text-blue-500 inline-flex items-center" href='https://www.livingseawalls.com.au/' rel="noreferrer" target="_blank">
                        Living Seawalls
                        <span className="material-icons text-base mb-1 ml-1 align-middle">open_in_new</span>
                    </a>,
                    who design and implement biologically enhanced marine structures that not only protect coastlines but also create thriving habitats for marine organisms.
                </p>
                <p className="text-gray-700 mb-4">
                    Inspired by these advancements, Malibu Icebergs aims to incorporate cutting-edge sustainable materials and eco-conscious engineering into our designs. By doing so, we strive to build a space that not only coexists with the natural environment but actively contributes to its regeneration and biodiversity.
                </p>
                <p className="text-gray-700">
                    Our vision is clear: a future where human ingenuity and environmental stewardship work hand in hand to ensure that the ocean—and all life within it—continues to thrive.
                </p>
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
