import React from "react";

//ASSETS
import ReportingImg from "../../../../public/assets/reporting.jpg";
import DataFlowImg from "../../../../public/assets/data-flow.jpg";
import OnlineSupportImg from "../../../../public/assets/dynamic-care.jpg";

const content = [
    {
        name: "Commissioners",
        img: ReportingImg,
    },
    {
        name: "MHST",
        img: OnlineSupportImg,
    },
    {
        name: "3rd Sector",
        img: DataFlowImg,
    },
];
const MainCustomers = () => {
    return (
        <div className="bg-lightGrey">
            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                            Who are you?
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                            Sagittis scelerisque nulla cursus in enim
                            consectetur quam. Dictum urna sed consectetur neque
                            tristique pellentesque. Blandit amet, sed aenean
                            erat arcu morbi. Cursus faucibus nunc nisl netus
                            morbi vel porttitor vitae ut. Amet vitae fames
                            senectus vitae.
                        </p>
                        <div className="mt-6">
                            <a
                                href="/clients"
                                className="text-base font-medium text-pink hover:text-darkGrey"
                            >
                                Meet our main clients&rarr;
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        {content.map((item) => (
                            <div
                                key={item.name}
                                className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCustomers;
