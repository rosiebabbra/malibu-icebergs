import icebergs from './assets/icebergs.jpg'
import './App.css'
import { useNavigate } from 'react-router';

function App() {

  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate('/about'); // Programmatically navigate to the About page
  // };

  return (
    <div className="container">
      <div className='left-container'>
        <h1>MALIBU ICEBERGS</h1>
        <p style={{ marginLeft: "auto", marginRight: "auto" }}>Malibu, California | Est. Completion: 2030</p>
        <button>Enter</button></div>
      <div className="icebergs-container">
        <img className='icebergs' src={icebergs} /></div>
    </div>
  )
}

export default App
