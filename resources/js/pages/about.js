import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import HighImpact from "../components/about/HighImpact";
import TestimonialSlider from "../components/TestimonialSlider";
import VisionValues from "../components/about/VisionValues";
import MeetTeam from "../components/about/MeetTeam";
import ContactSection from "../components/ContactSection";

const About = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"About Us"}/>

            <HighImpact />

            <div className="w-screen flex justify-center bg-lightGrey">
                <TestimonialSlider />
            </div>

            <MeetTeam />

            <VisionValues />

            <ContactSection/>
        </div>
    );
};

export default About;
