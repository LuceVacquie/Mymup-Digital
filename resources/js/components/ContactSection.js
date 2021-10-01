import React from "react";

import { phoneNumber, email } from "../shared";

const ContactSection = () => {
    return (
        <div className="flex relative text-white">
            <div className="flex flex-col items-center bg-blue w-1/2 p-12 md:p-16 lg:flex-row 2xl:p-28">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 2xl:h-24 2xl:w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div className="ml-0 mt-4 lg:mt-0 lg:ml-8 2xl:ml-12">
                    <p className="text-xl mb-8 md:text-2xl lg:text-3xl">Want to know more? Then give us a call.</p>
                    <p className="text-2xl md:text-4xl 2xl:text-5xl font-bold">{phoneNumber}</p>
                </div>
            </div>
            <div className="flex flex-col items-center bg-darkblue w-1/2 p-12 md:p-16 lg:flex-row 2xl:p-28">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 2xl:h-24 2xl:w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                </div>
                <div className="ml-0 mt-4 lg:mt-0 lg:ml-8 2xl:ml-12">
                    <p className="text-xl mb-8 md:text-2xl lg:text-3xl">Alternatively, you can email us.</p>
                    <p className="text-2xl md:text-4xl 2xl:text-5xl font-bold">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
