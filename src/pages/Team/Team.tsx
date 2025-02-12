import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

function Team() {
    const memberBlock = (name: string, imgPath: string, role: string, blurb: string, linkedinProfileUrl: string) =>
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#3866660b] to-[#4a80801c] rounded-[29px] shadow-lg my-6 px-6 py-6">


            <img
                src={imgPath}
                className="w-1/4 md:max-w-none mb-6 md:mb-0 md:mr-12 shadow-md rounded-md" />


            <div className="w-full">
                <div className="flex justify-between space-x-2">
                    <h2 className="text-[20px] font-medium text-black">{name}</h2>
                    <a href={linkedinProfileUrl} target="_blank">
                        <img src='./li.webp' className="w-7 h-7" alt="LinkedIn Icon" />
                    </a>
                </div>
                <h3 className="text-base text-black font-medium">{role}</h3>
                <p className="text-black mt-2 mb-4">
                    {blurb}
                </p>

            </div>
        </div>;
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-9">
                <h1 className="text-xl font-semibold text-start">Our Team</h1>
                <p className="pt-3">We're a small but passionate team dedicated to our mission—and we're just getting started. We can't wait to grow and welcome more amazing people to our journey.</p>
                {memberBlock('Rosie Babbra', "./moi.jpg", 'Founder', 'Rosie is a software engineer, digital nomad, and passionate advocate for innovative urban spaces. A Francophile and Australia enthusiast, she was captivated by Bondi Icebergs during a visit to Bondi Beach in 2022. This experience sparked a deep appreciation for ocean pools and their architectural and cultural significance worldwide. As a longtime California resident, she recognized the absence of such spaces in the region and embarked on an initiative to bring the first ocean pool to California, blending sustainability, community engagement, and coastal innovation.', 'https://www.linkedin.com/in/rosiebabbra/')}
                {memberBlock('Chris Romer-Lee', "./crl.jpg", 'Advisor', 'Chris is an experienced, award winning architect, designer and author with a demonstrated history of working in the architecture and planning industry. He founded Thames Baths, an organization whose mission is to enable safe swimming in the Thames River in London. Chris brings a decorated career in architecture and has his own architecture firm called Studio Octopi. He specializes in public swimming initiatives, spearheading other notable organizations such as Swimmable Cities and Future Lidos.', 'https://www.linkedin.com/in/romerlee/')}
            </div><div className="h-56 "></div>
            <Footer />
        </>
    );
}

export default Team;
