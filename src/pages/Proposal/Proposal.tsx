
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx'
import './Proposal.css'

function Proposal() {
    return (
        <>
            <Navbar />
            <div className='page-content'>
                <p className='heading'>Proposal</p>
                <div>
                    <img src='./icebergs.jpg' className='proposal-img' />
                    <p className='block proposal-img'>
                        Ocean pools have became popularized in Australian culture and brought to numerous countries across the globe but have yet to be introduced in California.
                        Our proposal is to build the first ocean pool in California maintaining the principles of material ecology and sustainability.
                    </p></div>
            </div>
            <Footer />
        </>
    );
}

export default Proposal;