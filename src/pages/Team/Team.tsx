import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

function Team() {
    const memberBlock = (name: string, imgPath: string, role: string, blurb: string, linkedinProfileUrl: string) =>
        <div className="flex flex-col md:flex-row items-center rounded-[29px] bg-[#fdfcf823] shadow-2xl my-6 px-6 py-6 mb-12">


            <img
                src={imgPath}
                className=" md:max-w-[400px] lg:max-w-60 mb-6 md:mb-0 md:mr-12 shadow-2xl rounded-md" />


            <div className="w-full">
                <div className="flex justify-between space-x-2">
                    <h2 className="text-[18px] text-gray-800">{name}</h2>
                    <a href={linkedinProfileUrl} target="_blank">
                        <img src='./li.webp' className="w-7 h-7" alt="LinkedIn Icon" />
                    </a>
                </div>
                <h3 className="text-base text-black font-bold">{role}</h3>
                <p className="mt-2 mb-2 text-[15px] text-gray-700">
                    {blurb}
                </p>

            </div>
        </div>;
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-9">
                <h1 className="text-2xl font-bold text-center text-gray-700">Our Team</h1>
                <p className="pt-3 text-center text-gray-600">We're a small but passionate team dedicated to our mission—and we're just getting started. We can't wait to grow and welcome more amazing people to our journey.</p>
                {memberBlock('Rosie Babbra', "./moi.jpg", 'Founder', 'Rosie is a software engineer, digital nomad, and passionate advocate for innovative social spaces. She fulfilled a lifelong dream of visiting Australia in 2022 and was captivated by Bondi Icebergs during a visit to Bondi Beach. This experience sparked a deep appreciation for ocean pools and their architectural and cultural significance worldwide. As a longtime California resident, she recognized the absence of such spaces in the region and embarked on an initiative to bring the first ocean pool to California, blending sustainability, community engagement, and coastal innovation.', 'https://www.linkedin.com/in/rosiebabbra/')}
                {memberBlock('Chris Romer-Lee', "./crl.jpg", 'Advisor', 'Chris is an experienced, award winning architect, designer and author with a demonstrated history of working in the architecture and planning industry. He founded Thames Baths, an organization whose mission is to enable safe swimming in the Thames River in London. Chris brings a decorated career in architecture and has his own architecture firm called Studio Octopi. He specializes in public swimming initiatives, spearheading other notable organizations such as Swimmable Cities and Future Lidos.', 'https://www.linkedin.com/in/romerlee/')}
            </div><div className="h-56 "></div>
            <Footer />
        </>
    );
}

export default Team;
