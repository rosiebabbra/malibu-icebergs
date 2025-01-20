import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate();
    const handleHomeButton = () => {
        navigate('/');
    };
    const handleSustainabilityButton = () => {
        navigate('/sustainability');
    };
    return (
        <div className="navbar">
            <div className="navbar-child"><button className='nav-button' onClick={handleHomeButton}>Home</button></div>
            <div className="navbar-child"><button className='nav-button'>About</button></div>
            <div className="navbar-child"><button className='nav-button'>Proposal</button></div>
            <div className="navbar-child"><button className='nav-button'>FAQs</button></div>
            <div className='navbar-child'><button className='nav-button' onClick={handleSustainabilityButton}>Sustainability</button></div>
            {/* <div className="navbar-child"><button className='nav-button'>News</button></div> */}
            <div className="navbar-child"><button className='nav-button'>Get Involved</button></div>
            {/* <div className="navbar-child"><button className='nav-button'>Donate</button></div> */}
        </div>
    );
}

export default Navbar;