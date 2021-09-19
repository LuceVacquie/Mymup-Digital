import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "./HeroSection";

const Commissioners = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"Clients"} />

            <Commissioners />
            <Mhsdt />
            <ThirdSector />
        </div>
    );
};

export default Commissioners;
