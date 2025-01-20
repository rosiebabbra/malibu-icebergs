
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx'
import './Proposal.css'

function Proposal() {
    return (
        <>
            <Navbar />
            <div className='page-content'>
                <p className='heading'>Proposal</p>
                <center>
                    <img src='./icebergs.jpg' width="500" />
                </center>
                <br />
                <p>
                    Malibu Icebergs is a community-led proposal to bring a ocean pool to the Malibu landscape.
                    Ocean pools have been described as a spiritual experience. They have became popularized in Australian culture and brought to numerous countries across the globe but have yet to be introduced in California.

                    The introduction of such a facility presents a lucrative business opportunity by combining the appeal of a unique recreational experience with the iconic allure of Malibu. This proposal outlines the vision, potential benefits, and operational framework for establishing a Bondi Icebergs-inspired ocean pool in Malibu, transforming the coastline into an unparalleled destination for both locals and tourists.
                </p>
            </div><Footer /></>
    );
}

export default Proposal;