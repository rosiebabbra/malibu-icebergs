import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
import { Link } from "react-router";

function FAQ() {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                {/* FAQ Block */}
                <div className="max-w-5xl my-6 px-6 py-6 bg-[#3b98982f] rounded-[29px] shadow-lg">
                    <h1 className="text-xl font-bold text-start mb-6">Frequently Asked Questions</h1>

                    {/* FAQ Items */}
                    <div className="mt-4">
                        <p className="text-ml font-semibold pb-3">Do you have to live in Malibu to be involved?</p>
                        <p className="pb-6 text-gray-700">
                            Nope! We are a collective of global individuals with an affinity for the Malibu community and a
                            desire to broaden ocean pool access across the world.
                        </p>

                        <p className="text-ml font-semibold pb-3">Who will have access to the facility?</p>
                        <p className="pb-6 text-gray-700">
                            Malibu Icebergs will be open to all! While we plan to offer memberships for regulars, we will
                            offer day passes to welcome any and all enthusiasts.
                        </p>

                        <p className="text-ml font-semibold pb-3">Who is funding the development of Malibu Icebergs?</p>
                        <p className="pb-6 text-gray-700">
                            This project will leverage community-led funding. Residents of the Malibu community and beyond
                            will come together to bring the vision of an ocean pool to reality.
                        </p>

                        <p className="text-ml font-semibold pb-3">Will construction of Malibu Icebergs harm marine wildlife? How can a project like this be sustainable?</p>
                        <p className="pb-6 text-gray-700">
                            The team is committed to upholding the highest levels of sustainability in the project. We are committed to not only
                            not harming or disrupting marine life, but bettering it by implementing principles of material ecology. To learn more, please visit
                            our <Link to="/sustainability" className="text-blue-500 hover:underline">sustainability</Link> page.
                        </p>

                        <p className="text-ml font-semibold pb-3">How can we get involved?</p>
                        <p className="pb-6 text-gray-700">
                            Most importantly, spread the word! We want to gain traction to secure the funding needed to bring this vision to life.
                            Your support can make a real impact in the following ways:
                        </p>

                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li><strong>Share on Social Media:</strong> Follow our journey and share updates with your network to build awareness.</li>
                            <li><strong>Join Our Community:</strong> Sign up for our newsletter to receive updates, announcements, and ways to contribute.</li>
                            <li><strong>Support Our Funding Efforts:</strong> Once we launch our fundraising campaign, consider donating or helping us connect with sponsors.</li>
                            <li><strong>Advocate for the Project:</strong> If you're a local resident or business owner, voicing support within the community can help gain traction.</li>
                            <li><strong>Get Involved Directly:</strong> Whether you have expertise in architecture, sustainability, or community engagement, we’d love to collaborate!</li>
                        </ul>
                        <p className="pt-4 pb-6 text-gray-700">
                            Every action, big or small, brings us closer to making Malibu Icebergs a reality. Let’s create something incredible together!
                        </p>


                        <p className="text-ml font-semibold pb-3">When will Malibu Icebergs be open?</p>
                        <p className="pb-6 text-gray-700">
                            As this is a brand new facility of its kind in the location, there will be a significant amount of time spent in planning and construction.
                            We hope to have the ocean pool completed by 2030.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FAQ;
