import React, { useRef } from 'react';
import Navbar from '../../components/Navbar.tsx';
import Footer from '../../components/Footer.tsx';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import './GetInvolved.css';

function GetInvolved() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        console.log(serviceId);

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS environment variables are not set.');
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, e.currentTarget, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error: { text: string }) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <Navbar />
            <div className="page-content">
                <form ref={form} onSubmit={sendEmail} className="email-form">
                    <div className="heading">
                        Wanna get involved?
                    </div>
                    <Typography variant="body2" paragraph>
                        Great news! We are in very early stages, but please reach out to Rosie at{' '}
                        <a href="mailto:rosiebabbra@gmail.com">rosiebabbra@gmail.com</a> to get involved. Also, please sign up to our
                        mailing list below for updates!
                    </Typography>


                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="universal-button">
                            Send
                        </button></div>
                </form>
            </div>

            <Footer />
        </>
    );
}

export default GetInvolved;
