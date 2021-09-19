import React from "react";

//ASSETS
import About1 from "../../../../public/assets/about-1.jpg";
import About2 from "../../../../public/assets/about-2.jpg";
import About3 from "../../../../public/assets/about-3.jpg";

const DynamicSystem = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <div className="flex justify-between space-x-10">
                    <img src={About1} alt="" className="w-1/3" />
                    <img src={About2} alt="" className="w-1/4" />
                    <img src={About3} alt="" className="w-2/5" />
                </div>
                <div className="flex justify-between space-x-10 items-center mt-12">
                    <p className="w-2/5 text-4xl text-darkGrey font-semibold">
                        Enabling you to deliver{" "}
                        <span className="text-blue font-light">
                            high impact{" "}
                        </span>
                        digital services.
                    </p>

                    <div className="text-mediumGrey">
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

export default DynamicSystem;
