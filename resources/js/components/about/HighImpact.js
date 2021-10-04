import React from "react";

//ASSETS
import About1 from "../../../../public/assets/about-1.jpg";
import About2 from "../../../../public/assets/about-2.jpg";
import About3 from "../../../../public/assets/about-3.jpg";

const HighImpact = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto px-4 py-20 sm:px-6 md:max-w-3xl lg:px-8 sm:py-28 lg:max-w-5xl xl:max-w-6xl">
                <div className="flex flex-col justify-between space-y-8 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-8 lg:grid-cols-3">

                    <div
                        className="w-full h-64 bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${About1})` }}
                    ></div>

                    <div
                        className="w-full h-64 bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${About2})` }}
                    ></div>

                    <div
                        className="w-full h-64 bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${About3})` }}
                    ></div>

                    <p className="text-darkGrey font-semibold text-4xl sm:my-auto">
                        Enabling you to deliver{" "}
                        <span className="text-blue font-light">
                            high impact{" "}
                        </span>
                        digital services.
                    </p>

                    <div className="w-full text-mediumGrey text-lg sm:col-span-2">
                        <p className="mb-4">
                            Supported by research and evaluation tools we will
                            transform, modernise and improve treatment pathways
                            and service delivery.
                        </p>
                        <p>
                            Our digital redesign and development will create
                            close integration between service users and service
                            providers, placing service users at the heart of
                            every development.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HighImpact;
