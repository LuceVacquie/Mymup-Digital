import React from "react";

const HeroSection = ({ img, title }) => {
    return (
        <div className="h-full w-full mx-auto">
            <div className="h-full relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-cover"
                        src={img}
                        alt=""
                    />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-darkGrey tracking-wide uppercase">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
