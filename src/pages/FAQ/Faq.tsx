import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function FAQ() {
    const faqs = [
        {
            question: "Do you have to live in Malibu to be involved?",
            answer: "Nope! We are a collective of global individuals with an affinity for the Malibu community and a desire to broaden ocean pool access across the world."
        },
        {
            question: "Who will be allowed to access the facility?",
            answer: "Malibu Icebergs will be open to all! While we plan to offer memberships for regulars, we will offer day passes to welcome any and all enthusiasts."
        },
        {
            question: "Who is funding the development of the project?",
            answer: "This project will leverage community-led funding. Residents of the Malibu community and beyond will come together to bring the vision of an ocean pool to reality."
        },
        {
            question: "How can a project like this be sustainable?",
            answer: (
                <>
                    The team is committed to upholding the highest levels of sustainability in the project. We are committed to not only
                    not harming or disrupting marine life, but bettering it by implementing principles of material ecology. To learn more, please visit
                    our <Link to="/sustainability" className="text-blue-500 hover:underline">sustainability</Link> page.
                </>
            )
        },
        {
            question: "How can we get involved?",
            answer: (
                <>
                    <p>Most importantly, spread the word! We want to gain traction to secure the funding needed to bring this vision to life.
                        Your support can make a real impact in the following ways:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Share on Social Media:</strong> Follow our journey and share updates with your network to build awareness.</li>
                        <li><strong>Join Our Community:</strong> Sign up for our newsletter to receive updates, announcements, and ways to contribute.</li>
                        <li><strong>Support Our Funding Efforts:</strong> Once we launch our fundraising campaign, consider donating or helping us connect with sponsors.</li>
                        <li><strong>Advocate for the Project:</strong> If you're a local resident or business owner, voicing support within the community can help gain traction.</li>
                        <li><strong>Get Involved Directly:</strong> Whether you have expertise in architecture, sustainability, or community engagement, we’d love to collaborate!</li>
                    </ul>
                    <p className="pt-4">Every action, big or small, brings us closer to making Malibu Icebergs a reality. Let’s create something incredible together!</p>
                </>
            )
        },
        {
            question: "When will Malibu Icebergs be open?",
            answer: "As this is a brand new facility of its kind in the location, there will be a significant amount of time spent in planning and construction. We hope to have the ocean pool completed by 2030."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number): void => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };


    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <div className="max-w-5xl my-6 px-6 py-6 bg-[#fdfcf823] rounded-[29px] shadow-lg">
                    <div className="flex items-center space-x-2">
                        <img src='./icon-star.svg' />
                        <h1 className="text-3xl font-bold text-start pl-2 text-black">FAQs</h1>
                    </div>

                    <div className="mt-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="text-ml font-medium w-full text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between space-x-2 text-black">
                                        {faq.question}
                                        <img src={openIndex === index ? './icon-minus.svg' : './icon-plus.svg'} />
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="text-gray-700 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                                <div className="bg-slate-100 h-px mt-3" />
                            </div>
                        ))}
                    </div>
                </div>
            </div><div className="h-56 "></div>
            <Footer />
        </>
    );
}

export default FAQ;
