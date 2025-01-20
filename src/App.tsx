import icebergs from './assets/icebergs.jpg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import About from './pages/About/About.tsx'
import Sustainability from './pages/Sustainability/Sustainability.tsx';

function Home() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <>
      <div className='container'>
        <div className='left-container'>
          <h1 className='title'>MALIBU ICEBERGS</h1>
          <div className='description'>
            Inspired by the world famous Bondi Icebergs swimming club in Sydney.
            The first of its kind on the California coast.</div>
          <button className='home-button' onClick={handleNavigate}>Enter</button></div>
        <div className="right-container">
          <img className='icebergs' src={icebergs} /></div>
      </div>
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sustainability" element={<Sustainability />} />
    </Routes>
  );
}

export default App;