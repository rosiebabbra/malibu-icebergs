import './About.css'
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx'

function About() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src='./logo.png' height="175"></img></div>
                <Navbar /></div>
            <div className='page-content'>
                <p className='about-heading'>Overview</p><p>
                    Malibu Icebergs is a community-led proposal to bring a ocean pool to the Malibu landscape.
                    Ocean pools have been described as a spiritual experience. They have became popularized in Australian culture and brought to numerous countries across the globe but have yet to be introduced in California.

                    The introduction of such a facility presents a lucrative business opportunity by combining the appeal of a unique recreational experience with the iconic allure of Malibu. This proposal outlines the vision, potential benefits, and operational framework for establishing a Bondi Icebergs-inspired ocean pool in Malibu, transforming the coastline into an unparalleled destination for both locals and tourists.
                </p><p className='about-heading'>
                    Vision</p><p>
                    The ocean pool will seamlessly integrate with Malibu’s natural beauty, offering a safe and environmentally conscious way to enjoy ocean swimming. Featuring a stunning, architecturally designed structure that blends with the landscape, the pool will provide year-round access to a quintessentially Californian experience.

                </p>
            </div><Footer /></>
    );
}

export default About;