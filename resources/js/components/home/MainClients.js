import React from "react";

//COMPONENTS
import ClientCard from "./ClientCard";

//ASSETS
import ReportingImg from "../../../../public/assets/reporting.jpg";
import DataFlowImg from "../../../../public/assets/data-flow.jpg";
import OnlineSupportImg from "../../../../public/assets/dynamic-care.jpg";

const content = [
    {
        name: "Commissioners",
        id: "/clients#commissioners",
        img: ReportingImg,
    },
    {
        name: "MHST",
        id: "#mhst",
        img: OnlineSupportImg,
    },
    {
        name: "3rd Sector",
        id: "#thirdSector",
        img: DataFlowImg,
    },
];
const MainCustomers = () => {
    return (
        <div className="bg-lightGrey">
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl sm:text-5xl text-darkGrey mb-8 sm:mb-12">
                    Who are you?
                </h2>
                <div className="flex flex-col justify-between space-y-5 w-1/2 mx-auto sm:w-full sm:flex-row sm:space-y-0 sm:space-x-5 md:space-x-10">
                    {content.map((item) => (
                        <ClientCard
                            key={item.name}
                            name={item.name}
                            id={item.id}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainCustomers;
