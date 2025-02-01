import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

function Sustainability() {
    const sustainabilityBlock = (headline: string) => <div className="flex flex-col md:flex-row items-center bg-[#3b98982f] rounded-[29px] shadow-lg my-6 px-6 py-6">

        {/* Image (Left on Desktop, Top on Mobile) */}
        <img
            src="./sustainability.png"
            alt="Sustainability"
            className="w-full md:w-1/3 max-w-[400px] md:max-w-none mb-6 md:mb-0 md:mr-12 shadow-md" />

        {/* Text Content (Flows below image on mobile) */}
        <div className="w-full">
            <h2 className="text-lg font-bold text-gray-900">{headline}</h2>
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
            <div className="max-w-6xl mx-auto p-6">
                {sustainabilityBlock('Revolutionizing Marine Habitats')}
            </div>
            <Footer />
        </>
    );
}

export default Sustainability;
