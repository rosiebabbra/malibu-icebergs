import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
import emailjs from "@emailjs/browser";

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
                    setIsSuccess(true); // Set success state to true
                    if (form.current) {
                        form.current.reset(); // Optionally reset the form
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
            <div className="max-w-4xl mx-auto pt-12 pb-6">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-gradient-to-r from-[#3866660b] to-[#4a80801c] p-12 rounded-[29px] shadow-lg"
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
                    <img src='./icebergs.jpg' className='rounded-lg'></img>

                    {/* Name Input */}
                    <div className="mb-6">
                        <label htmlFor="user_name" className="block font-semibold text-gray-800 pt-8 pb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Enter your name"
                            required
                            className="w-full p-3 text-sm border border-gray-300 rounded-md outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label htmlFor="user_email" className="block font-semibold text-gray-800 pb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="Enter your email"
                            required
                            className="w-full p-3 text-sm border border-gray-300 rounded-md outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#4a8080] text-white px-6 py-2 rounded-lg hover:bg-[#35DCA4] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500 border-4 border-transparent w-full md:w-auto"
                        >
                            Send
                        </button>
                    </div>
                </form>

                {/* Success Message */}
                {isSuccess && (
                    <div className="mt-6 p-3 bg-green-100 text-green-800 border border-green-300 rounded-md text-center">
                        Thank you for signing up! You'll hear from us soon.
                    </div>
                )}
            </div><div className="h-56 "></div>
            <Footer />
        </>
    );
}

export default GetInvolved;
