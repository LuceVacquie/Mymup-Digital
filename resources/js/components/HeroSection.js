import React from "react";

const HeroSection = ({ img, title }) => {
    return (
        <div className="w-full h-96 relative">
            <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${img})`}}>
                <div className="absolute inset-0" style={{background: 'rgba(255, 255, 255, 0.5)'}}/>

                <div className="text-center absolute w-full top-1/2">
                    <div className="text-xl font-medium text-darkGrey mb-4">
                        <a href="/" className="hover:text-blue">Home</a> - {title}
                    </div>
                    <h2 className="text-5xl font-medium text-darkGrey">
                        {title}
                    </h2>
                </div>
            </div>
            
        </div>
    );
};

export default HeroSection;
