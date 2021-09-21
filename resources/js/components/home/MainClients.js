import React from 'react'

//COMPONENTS
import ClientCard from './ClientCard';

//ASSETS
import ReportingImg from "../../../../public/assets/reporting.jpg";
import DataFlowImg from "../../../../public/assets/data-flow.jpg";
import OnlineSupportImg from "../../../../public/assets/dynamic-care.jpg";

const content = [
    {
        name:"Commissioners",
        href:"/clients#commissioners",
        img:ReportingImg
    },
    {
        name:"MHST",
        href:"/clients#mhst",
        img:OnlineSupportImg
    },
    {
        name:"3rd Sector",
        href:"/clients#thirdSector",
        img:DataFlowImg
    },
]
const MainCustomers = () => {
    return(
        <div className="bg-lightGrey">
            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <h2 className="text-center text-5xl text-darkGrey mb-12">
                    Who are you?
                </h2>
                <div className="flex justify-between space-x-10">
                    {content.map((item) => (
                        <ClientCard
                            key={item.name}
                            name={item.name}
                            href={item.href}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainCustomers