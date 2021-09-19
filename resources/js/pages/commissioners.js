import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import QuestionSolution from "../components/QuestionSolution";

const Commissioners = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"About us"} />

            <QuestionSolution />
        </div>
    );
};

export default Commissioners;
