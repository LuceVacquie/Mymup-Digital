import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

//ASSETS
import HeroImg from "../../../public/assets/contact-us.jpeg";

//COMPONENTS
import HeroSection from "../components/HeroSection";

const Contact = () => {
    const mapStyles = {
        height: "100vh",
        width: "100%",
    };

    const defaultCenter = {
        lat: 53.8376455892325,
        lng: -1.7827000014917709,
    };

    return (
        <div>
            <HeroSection img={HeroImg} title={"Contact Us"} />

            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 md:py-24 sm:py-28 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24">
                    <div>
                        <div className="mb-14">
                            <div class="w-6 h-1 bg-blue mb-6 rounded-lg"></div>
                            <h2 className="text-4xl font-extrabold text-darkGrey tracking-tight sm:text-4xl">
                                Get in touch
                            </h2>
                            <h3 className="mt-4 text-3xl text-darkGrey sm:mt-3">
                                Want to know more about MYMUP Digital?
                            </h3>
                            <p className="mt-8 text-lg text-mediumGrey sm:mt-3">
                                If you have any questions or queries regarding
                                MYMUP Digital then please give us a call or
                                email on the details below.
                            </p>
                        </div>

                        <div
                            className="flex border border-lightGrey p-12 mb-7 text-lg"
                            style={{ height: "fit-content" }}
                        >
                            <div className="text-blue">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-12 w-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div className="text-mediumGrey ml-8">
                                <p className="font-bold">MYMUP Digital Ltd</p>
                                <p>Bradford Office</p>
                                <p>Regus 1st Floor East Suite</p>
                                <p>The Waterfront</p>
                                <p>Shipley</p>
                                <p>West Yorkshire</p>
                                <p>BD17 7TD</p>
                            </div>
                        </div>

                        <div
                            className="flex items-center border border-lightGrey p-12 text-lg"
                            style={{ height: "fit-content" }}
                        >
                            <div className="text-blue">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-12 w-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                                    />
                                </svg>
                            </div>
                            <div className="text-blue hover:text-darkBlue ml-8">
                                <p>
                                    <a href="mailto:info@mymup.org">
                                        info@mymup.org
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:01274 897714">01274 897714</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <form action="#" method="POST" className="mt-9">
                        <div className="flex justify-between space-x-10 mb-5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                                className="bg-lightGrey block w-full border-none sm:text-sm px-5 py-4"
                            />

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email address"
                                className="bg-lightGrey block w-full border-none sm:text-sm px-5 py-4"
                            />
                        </div>

                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            aria-describedby="phone-description"
                            placeholder="Telephone number"
                            className="bg-lightGrey block w-full border-none sm:text-sm mb-5 px-5 py-4"
                        />

                        <textarea
                            id="message"
                            name="message"
                            aria-describedby="message"
                            rows={4}
                            placeholder="Your message"
                            className="bg-lightGrey block w-full border-none sm:text-sm mb-5 px-5 py-4"
                            defaultValue={""}
                        />

                        <button
                            type="submit"
                            className="px-10 py-4 border border-transparent text-xs font-bold rounded-sm shadow-sm uppercase text-darkGrey bg-yellow"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full">
                {/* <LoadScript
                    googleMapsApiKey="AIzaSyC1tpFlbEhKzoF-GbaBrzjyeLlLbE6XVQk"
                    className="h-full w-full object-cover"
                >
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                    />
                </LoadScript> */}
            </div>
        </div>
    );
};

export default Contact;
