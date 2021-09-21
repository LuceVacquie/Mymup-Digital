import React from "react";

//ASSETS
import Vision from "../../../../public/assets/our-vision.jpg";
import Values from "../../../../public/assets/our-values.jpg";

const VisionValues = () => {
    return (
        <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 py-8 md:py-24 sm:py-28 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between md:space-x-10 lg:space-x-20">
                <div className="flex-1 mt-12 sm:mt-16 lg:mt-0">
                    <div className="w-full lg:px-0 lg:m-0">
                        <img className="" src={Vision} alt="" />
                    </div>
                </div>
                <div className="flex-1 max-w-xl mt-8 md:mx-auto lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                        <div className="">
                            <div className="w-6 h-1 bg-blue mb-6 rounded-lg"></div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-darkGrey">
                                Our Vision
                            </h2>
                            <p className="mt-4 lg:pr-11 text-base lg:text-lg text-mediumGrey">
                                We enable health care professionals and service
                                providers to record and report key information
                                in a simple, modern manner in line with
                                reporting requirements. We enhance provision
                                with impactful digital self-care tools. This
                                empowers commissioners and providers to
                                demonstrate impact across all their services and
                                increase access to effective support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 md:mt-20">
                <div className="flex flex-col md:flex-row justify-between md:space-x-10 lg:space-x-20">
                    <div className="flex-1 max-w-xl md:mx-auto lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                            <div className="">
                                <div className="w-6 h-1 bg-blue mb-6 rounded-lg"></div>
                                <h2 className="text-3xl font-extrabold tracking-tight text-darkGrey">
                                    Our Values
                                </h2>
                                <ul className="mt-4 lg:pr-11 text-base lg:text-lg text-mediumGrey">
                                    <li>
                                        - We do the hard work for you to make
                                        your life easier
                                    </li>
                                    <li>
                                        - Solutions are co-created with the
                                        communities they serve
                                    </li>
                                    <li>
                                        - Simple to use tools to engage
                                        clinicians and improve data quality
                                    </li>
                                    <li>
                                        - Ongoing and accessible support and
                                        training
                                    </li>
                                    <li>
                                        - Enhancing your work and connections to
                                        clients
                                    </li>
                                    <li>
                                        -High quality data can improve services
                                        and outcomes for health care
                                        professionals and those who you support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 mt-8 md:mt-16 lg:mt-0">
                        <div className="w-full lg:px-0 lg:m-0">
                            <img className="" src={Values} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionValues;
