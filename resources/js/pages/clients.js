import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import Commissioners from "../components/clients/Commissioners";
import Mhst from "../components/clients/Mhst";
import ThirdSector from "../components/clients/Third-sector";

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
