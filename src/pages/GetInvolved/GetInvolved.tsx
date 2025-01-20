import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx'
import TextField from '@mui/material/TextField';
import './GetInvolved.css'

function GetInvolved() {
    return (<> <Navbar />
        <div className='page-content' > <p className='heading' >Wanna get involved?</p>
            <div>Great news! We are in very early stages, but please reach out to Rosie at rosiebabbra@gmail.com to get involved. Also, please sign up to our mailing list below for updates! </div>
            <br />
            <p className='heading'>Sign up to our newsletter</p>
            <div style={{ paddingBottom: "15px" }}>You'll get an email as soon as we have updates to share.</div>
            <TextField fullWidth></TextField>
            <div style={{ height: "50px" }}></div>
            <center>
                <button className='home-button'>Sign up</button></center>
        </div >
        <div style={{ height: "150px" }}></div>
        <Footer /></>);
}

export default GetInvolved;