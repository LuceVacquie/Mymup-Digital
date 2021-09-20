import React from "react";

//COMPONENTS
import HeroCarousel from "../components/home/HeroCarousel";
import DynamicSystem from "../components/DynamicSystem";
import MainCustomers from "../components/home/MainCustomers";
import TestimonialSlider from "../components/TestimonialSlider";
import CTA from "../components/Cta";
import Contact from "../components/home/Contact";

const Homepage = () => {

    return (
        <div>

            <div className="w-screen h-screen flex justify-center relative top-0">
                <HeroCarousel />
            </div>

            <DynamicSystem />

            <MainCustomers />

            <div className="w-screen flex justify-center">
                <TestimonialSlider />
            </div>

            <CTA />

            <Contact />
        </div>
    );
};

export default Homepage;
