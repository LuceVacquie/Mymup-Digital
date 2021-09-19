import React from "react";
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import HighImpact from "../components/about/HighImpact";
import VisionValues from "../components/about/VisionValues";
import MeetTeam from "../components/about/MeetTeam";

const About = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"About us"} />
            <HighImpact />
            <MeetTeam />
            <VisionValues />
        </div>
    );
};

export default About;
