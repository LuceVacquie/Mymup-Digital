import React from "react";

//COMPONENTS
import FunctionsCard from "./FunctionsCard";

//ASSETS
import ReportingImg from "../../../public/assets/reporting.jpg";
import DataFlowImg from "../../../public/assets/data-flow.jpg";
import OnlineSupportImg from "../../../public/assets/dynamic-care.jpg";

const content = [
    {
        img: ReportingImg,
        alt: "Reporting",
        title: "Recording and Reporting",
        description:
            "MYMUP digital provides an easy to use, mobile and secure recording platform for professionals using validated assessments. Our in built tools automatically create output and outcome reports for your audiences.",
        href: "/reporting",
        buttonColour: "darkPink",
        bgColour: "pink",
    },
    {
        img: DataFlowImg,
        alt: "Data Flow",
        title: "Data Flow",
        description:
            "Uniquely, MYMUP digital flows your output and outcome data, on your behalf, to the Mental Health Services Dataset.",
        href: "/data-flow",
        buttonColour: "darkPurple",
        bgColour: "purple",
    },
    {
        img: OnlineSupportImg,
        alt: "Online Support",
        title: "Online Support",
        description:
            "An extensive co-created digital self-care & support module that complements face to face support for better outcomes and access to 24/7 care.",
        href: "/online-support",
        buttonColour: "darkOrange",
        bgColour: "orange",
    },
];

const DynamicSystem = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
                <h2 className="text-center text-4xl sm:text-5xl text-darkGrey mb-8 sm:mb-12">
                    MYMUP's Three Functions
                </h2>
                <div className="justify-between space-x-0 space-y-10 md:flex md:space-x-10 md:space-y-0">
                    {content.map((item) => (
                        <FunctionsCard
                            key={item.title}
                            img={item.img}
                            alt={item.alt}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                            buttonColour={item.buttonColour}
                            bgColour={item.bgColour}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DynamicSystem;
