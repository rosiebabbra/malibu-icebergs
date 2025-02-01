import { Routes, Route, useNavigate } from "react-router";
import { useState } from "react";
import About from "./pages/About/About";
import Sustainability from "./pages/Sustainability/Sustainability";
import Proposal from "./pages/Proposal/Proposal";
import FAQ from "./pages/FAQ/Faq";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Footer from "./components/Footer";
import icebergs from "./assets/icebergs_slowmo.mp4";

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
        <div className="flex justify-center items-center h-screen w-screen bg-white">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Background Video & Content */}
      <div className={`relative w-screen h-screen overflow-hidden ${videoLoaded ? "" : "hidden"}`}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src={icebergs} type="video/mp4" />
        </video>


        {/* Content Box */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#32453F] bg-opacity-80 text-white rounded-[49px] px-12 pb-8 pt-12 text-center max-w-xl max-md:w-[90%]">
          <h1 className="text-4xl font-bold uppercase tracking-wide font-['Josefin_Sans'] max-md:text-[27px]">
            Malibu Icebergs
          </h1>
          <p className="text-sm mt-3 font-medium">
            Inspired by the world-famous Bondi Icebergs swimming club in Sydney. The first of its kind on the California coast.
          </p>
          <button
            className="mt-8 bg-[#35DCA4] text-white px-6 py-1 rounded-lg hover:bg-[#35DCA4] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500 border-4 border-transparent max-md:mb-0 max-md:mt-4 max-md:w-60"
            onClick={handleNavigate}
          >
            Enter
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
