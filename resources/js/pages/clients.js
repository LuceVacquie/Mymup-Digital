import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import Commissioners from "../components/commissioners";
import Mhst from "../components/mhst";
import ThirdSector from "../components/third-sector";

const Clients = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"Clients"} />

            <Commissioners />

            <Mhst />

            <ThirdSector />
        </div>
    );
};

export default Clients;
