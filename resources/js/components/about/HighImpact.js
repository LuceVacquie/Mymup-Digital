import React from "react";

//ASSETS
import About1 from "../../../../public/assets/about-1.jpg";
import About2 from "../../../../public/assets/about-2.jpg";
import About3 from "../../../../public/assets/about-3.jpg";

const HighImpact = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl md:max-w-3xl mx-auto px-4 py-8 md:py-16 sm:py-28 sm:px-6 lg:px-8 lg:max-w-5xl xl:max-w-7xl">
                <div className="flex flex-wrap justify-between xl:space-x-10">
                    <div className="w-full h-64 md:h-80 md:w-1/2 lg:w-1/3 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${About1})`}}></div>
                    <div className="w-full h-64 md:h-80 md:w-1/2 lg:w-1/4 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${About2})`}}></div>
                    <div className="w-full h-64 md:h-80 md:w-1/2 lg:w-2/5 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${About3})`}}></div>
                    
                
                {/* <div className="flex justify-between space-x-10 items-center mt-12"> */}
                    <p className="text-darkGrey font-semibold w-1/2 mt-12 lg:w-2/5 text-3xl xl:text-4xl ">
                        Enabling you to deliver{" "}
                        <span className="text-blue font-light">
                            high impact{" "}
                        </span>
                        digital services.
                    </p>
                
                    <div className="w-full mt-12 lg:w-3/5 text-mediumGrey">
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
                {/* </div> */}
            </div>
        </div>
    );
};

export default HighImpact;
