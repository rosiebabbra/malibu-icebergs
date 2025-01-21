import { useState } from 'react';
import { To, useNavigate } from 'react-router';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleRouting = (route: To) => {
        navigate(route);
        setIsMenuOpen(false); // Close menu on navigation
    };

    return (
        <div className="header">
            <div className="logo">
                <img src="./logo.png" height="175" alt="Logo" />
            </div>
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <div className="navbar-child"><button className="nav-button" onClick={() => handleRouting('/')}>Home</button></div>
                <div className="navbar-child"><button className="nav-button" onClick={() => handleRouting('/about')}>About</button></div>
                <div className="navbar-child"><button className="nav-button" onClick={() => handleRouting('/proposal')}>Proposal</button></div>
                <div className="navbar-child"><button className="nav-button" onClick={() => handleRouting('/faqs')}>FAQs</button></div>
                <div className="navbar-child"><button className="nav-button" onClick={() => handleRouting('/sustainability')}>Sustainability</button></div>
                <div className="navbar-child"><button className="nav-button" onClick={() => handleRouting('/getinvolved')}>Get Involved</button></div>
            </div>
        </div>
    );
}

export default Navbar;
