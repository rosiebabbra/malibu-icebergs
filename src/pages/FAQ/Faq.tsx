import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx'
import './Faq.css'

function FAQ() {
    return (<> <Navbar />
        <div className='page-content' > <p className='heading' >Frequency Asked Questions</p> <br />
            <div className='question'>Who will have access to the facility?</div>
            <div className='answer'>Malibu Icebergs will be open to all! While we plan to offer memberships for regulars, we will offer day passes to welcome any and all enthusiasts.
            </div>

            <div className='question'>Who is funding the development of Malibu Icebergs?</div>
            <div className='answer'>This project will leverage community-led funding. Residents of the Malibu community and beyond will come together to bring the vision of an ocean pool to reality.
            </div>

        </div><Footer /></>);
}

export default FAQ;