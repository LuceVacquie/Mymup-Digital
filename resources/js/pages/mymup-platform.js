import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/mymup2.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import DynamicSystem from "../components/DynamicSystem";
import ContactSection from "../components/ContactSection";

const Platform = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"MYMUP Digital"} />

            <div className="bg-white">
                <div className="max-w-2xl md:max-w-3xl mx-auto px-4 py-8 md:py-24 sm:py-28 sm:px-6 lg:px-8 lg:max-w-5xl xl:max-w-7xl">
                    <p className="text-center text-lg md:text-2xl text-mediumGrey mb">
                        MYMUP Digital is a customisable web application designed
                        in collaboration with service users and health care
                        professionals. MYMUP Digital encompasses three pillars
                        enabling services to transform their digital offer,
                        compliment their existing delivery and effectively
                        measure impact.
                    </p>
                </div>
            </div>

            <DynamicSystem />

            <ContactSection />
        </div>
    );
};

export default Platform;
