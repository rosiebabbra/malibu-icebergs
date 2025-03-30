import { Routes, Route, useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import About from "./pages/About/About";
import Sustainability from "./pages/Sustainability/Sustainability";
import Proposal from "./pages/Proposal/Proposal";
import Team from "./pages/Team/Team";
import FAQ from "./pages/FAQ/Faq";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Footer from "./components/Footer";
import Mixpanel from "./utils/mixpanel";
import { MdChevronRight } from "react-icons/md";
import ProjectStatus from "./pages/ProjectStatus/ProjectStatus";


const icebergs = 'https://firebasestorage.googleapis.com/v0/b/malibu-icebergs.firebasestorage.app/o/icebergs_slowmo.mp4?alt=media&token=d5dc29e8-22e4-4a6e-97ab-b54a2a2ced81';

function Home() {

  const [videoLoaded, setVideoLoaded] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <>
      {/* Loading Spinner */}
      {!videoLoaded && (
        <div className="flex justify-center items-center h-screen w-screen bg-[#fdfbe8]">
          <div className="w-24 h-24 border-[15px] border-gray-200 border-t-[#70a594] rounded-full animate-spin"></div>
        </div>
      )}

      {/* Background Video & Content */}
      <div className={`relative w-screen h-screen overflow-hidden ${videoLoaded ? "" : "hidden"}`}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-10"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src={icebergs} type="video/mp4" />
        </video>


        {/* Content Box */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#32453F] bg-opacity-55 shadow-lg text-white rounded-[49px] px-12 pb-8 pt-10 text-center max-w-[600px] max-md:w-[90%]">
          <img src='malibu_tides_white.png' alt="Malibu Tides Logo" className="h-12 mx-auto" />

          <p className="text-[16px] mt-3 font-medium">
            An initiative inspired by the world-famous Bondi Icebergs swimming club in Sydney. The first of its kind on the California coast.
          </p>
          <button
            className="mx-auto text-[20px] mt-6 bg-[#e8e6c3] text-black font-bold pl-7 pr-3 py-[3px] rounded-lg hover:bg-[#efecc1] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500 border-4 border-transparent flex items-center gap-2 max-md:pl-7 max-md:py-[3px] max-md:w-auto"
            onClick={handleNavigate}
          >
            <span className="font-[650] text-[18px] pb-[2px]">Discover</span>
            <MdChevronRight />
          </button>


        </div>

      </div>

      <Footer />
    </>
  );
}

function formatPageName(str: string): string {
  if (!str) return ""; // Handle empty string edge case
  return str.slice(1).charAt(0).toUpperCase() + str.slice(2);
}

function App() {
  const location = useLocation();

  useEffect(() => {
    try {
      console.log(`🛠️ Attempting to track page view: ${location.pathname}`);
      const eventName = formatPageName(location.pathname)
        ? formatPageName(location.pathname) + " Page View"
        : "Home Page View";
      Mixpanel.track(eventName, { path: location.pathname });
    } catch (error) {
      console.error("❌ Mixpanel tracking error:", error);
    }
  }, [location.pathname]);

  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/project-status" element={<ProjectStatus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
