import React, {useState} from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import Commissioners from "../components/clients/Commissioners";
import Mhst from "../components/clients/Mhst";
import ThirdSector from "../components/clients/Third-sector";
import ComparisonTable from "../components/clients/ComparisonTable";
import ContactSection from "../components/ContactSection";

const Clients = () => {
    const [isMiddleSection, setIsMiddleSection] = useState(true)
    return (
        <div>
            <HeroSection img={HeroImg} title={"Clients"} />

            <Commissioners />

            <Mhst isMiddleSection={isMiddleSection}/>

            <ThirdSector />

            <ComparisonTable/>

            <ContactSection />
        </div>
    );
};

export default Clients;
