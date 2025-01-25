
import Navbar from '../../components/Navbar.tsx'
import Footer from '../../components/Footer.tsx'
import './Sustainability.css'

function Sustainability() {
    return (
        <><Navbar />
            <div className='page-content'>
                <p className='heading'>Sustainability</p>
                <img src='./sustainability.png' className='sustainability-img'></img>
                <p></p>
                The ocean pool will be designed with sustainability at its core:
                <li>Built using eco-friendly materials and practices.</li>
                <li>Engineered to minimize disruption to marine ecosystems.</li>
                <li>Designed to blend harmoniously with Malibu’s coastline, preserving its natural beauty.</li>
                <p />
                Additionally, the pool will foster community engagement through educational programs on marine conservation and partnerships with local organizations to enhance coastal awareness and stewardship.
                <p />
                By employing the ideals of material ecology, or the usage of naturally occurring, environmental materials in construction, the pool will serve as a model for sustainable design. This approach reduces the environmental footprint of construction while showcasing innovative ways to coexist with nature. The use of local, renewable resources not only minimizes waste but also supports the region's biodiversity by integrating seamlessly into the coastal environment.

            </div > <Footer /></>
    );
}

export default Sustainability;