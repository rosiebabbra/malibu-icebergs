import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
import emailjs from "@emailjs/browser";

// If image is in src/assets/, import it:
// import icebergImage from "../../assets/pexels-vince-2265875.jpg";

function GetInvolved() {
    const form = useRef<HTMLFormElement>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are not set.");
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, e.currentTarget, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setIsSuccess(true);
                    if (form.current) {
                        form.current.reset();
                    }
                },
                (error: { text: string }) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <>
            <Navbar />
            <div className="w-[90%] max-w-5xl mx-auto pt-12 pb-6 px-6 sm:px-12">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-gradient-to-r from-[#3866660b] to-[#4a80801c] p-12 rounded-[29px] shadow-lg w-full"
                >
                    <h2 className="text-lg font-bold">Wanna get involved?</h2>
                    <p className="text-md mt-3 mb-4 text-gray-700">
                        Great news! We are in very early stages, but please reach out to
                        Rosie at{" "}
                        <a
                            href="mailto:rosiebabbra@gmail.com"
                            className="text-blue-600 underline"
                        >
                            rosiebabbra@gmail.com
                        </a>{" "}
                        to get involved. Also, please sign up to our mailing list below for
                        updates!
                    </p>

                    {/* FLEXBOX FIX FOR LAYOUT */}
                    <div className="md:items-center gap-6">
                        {/* Image Section */}
                        <div className="items-center justify-center">
                            <img
                                src="./pexels-pixelcop-1556987.jpg"
                                alt="Ocean Pool"
                                className="mx-auto rounded-lg object-cover object-[50%_65%] w-full h-[300px] mb-6"
                            />
                        </div>


                        {/* Form Section */}
                        <div className="w-full flex flex-col items-center justify-center h-full">
                            {/* Name Input */}
                            <div className="w-full max-w-full pb-6">
                                <label htmlFor="user_name" className="block font-semibold text-gray-800 pb-2 text-left">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full max-w-full min-h-[60px] flex-grow p-3 text-sm border border-gray-300 rounded-md outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 mx-auto block"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="w-full max-w-full pb-6">
                                <label htmlFor="user_email" className="block font-semibold text-gray-800 pb-2 text-left">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full max-w-full min-h-[60px] flex-grow p-3 text-sm border border-gray-300 rounded-md outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 mx-auto block"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="w-full max-w-lg">
                                <button
                                    type="submit"
                                    className="bg-[#e7e6d7] text-gray-800 text-[17px] font-semibold px-6 py-3 w-full min-h-[60px] flex items-center justify-center rounded-[29px] hover:bg-[#d8d7c4] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500 border-4 border-transparent mx-auto block"
                                >
                                    Send
                                </button>
                            </div>
                        </div>

                    </div>

                </form>

                {/* Success Message */}
                {isSuccess && (
                    <div className="mt-6 p-3 bg-green-100 text-green-800 border border-green-300 rounded-md text-center">
                        Thank you for signing up! You'll hear from us soon.
                    </div>
                )}
            </div>


            <div className="h-56"></div>
            <Footer />
        </>
    );
}

export default GetInvolved;
