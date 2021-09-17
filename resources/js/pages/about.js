import React from "react";
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import VisionValues from "../components/about/VisionValues";

const About = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"About us"} />
            <VisionValues />
        </div>
    );
};

export default About;
