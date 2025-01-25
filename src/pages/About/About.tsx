import './About.css'
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx'

function About() {
    return (
        <>
            <Navbar />
            <div className='page-content'>
                <div className='block '>
                    <p className='heading'>
                        Who We Are</p>
                    <p style={{ fontSize: "18px", textAlign: "center" }}>
                        "Malibu Icebergs is a community-led proposal to bring an ocean pool to the Malibu landscape.
                        Ocean pools have been described as a spiritual experience. They have became popularized in Australian culture and brought to numerous countries across the globe but have yet to be introduced in California.

                        The introduction of such a facility brings something entirely new to the region: a unique recreational experience with the iconic allure of Malibu.""

                    </p>
                    <p style={{ textAlign: "right", fontSize: "18px" }}>- Rosie Babbra</p>
                </div>

                <div className='block '>
                    <p className='heading'>
                        The Vision</p><p>
                        The ocean pool will seamlessly integrate with Malibu’s natural beauty, offering a safe and environmentally conscious way to enjoy ocean swimming. Featuring a stunning, architecturally designed structure that blends with the landscape, the pool will provide year-round access to a quintessentially Californian experience.

                    </p>
                </div>
                <div className='block '>
                    <p className='heading'>
                        How It All Came About</p>
                    <img className='moi' src='./moi.gif' height="350px" />
                    <p>
                        Hi, I'm Rosie. I'm a software engineer, digital nomad, Francophile, Australia enthusiast, and multimedia artist. In 2022 my travels took my to Sydney, Australia, where I discovered the
                        marvel of ocean pools. After seeing one in person, I began to think - how on Earth could we not have one of these in the States?!
                        <p></p>
                        As a longtime Los Angeles resident, I couldn't think of a better place to introduce the concept than on the California coast. I started doing more research on ocean pools,
                        reached out to architects experts from all over the world, and the idea for Malibu Icebergs was born.
                        <p></p>
                        I hope you'll join me on this journey to build the first ocean pool in the United States. If you want to get involved, don't be a stranger - I'd love to hear from you!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;