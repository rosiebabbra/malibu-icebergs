import icebergs from './assets/icebergs_slowmo.mp4'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import About from './pages/About/About.tsx'
import Sustainability from './pages/Sustainability/Sustainability.tsx';
import Proposal from './pages/Proposal/Proposal.tsx';
import FAQ from './pages/FAQ/Faq.tsx';
import GetInvolved from './pages/GetInvolved/GetInvolved.tsx';
import Footer from './components/Footer.tsx';

function Home() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <>
      <div className='container'>
        <video className='video-tag' autoPlay loop muted>
          <source src={icebergs} type='video/mp4' />
        </video>
        <div className='home-page-content-container'>
          <div className='title'>Malibu Icebergs</div>
          <div className='description'>Inspired by the world famous Bondi Icebergs swimming club in Sydney. The first of its kind on the California coast.
          </div>
          <button className='universal-button' onClick={handleNavigate}>Enter</button></div>
      </div >
      <Footer />
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/proposal" element={<Proposal />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/faqs" element={<FAQ />} />
    </Routes>
  );
}

export default App;