import React from "react";

const CTA = () => {
    return (
        <div className="bg-blue">
            <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 py-12 sm:py-28 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                    <span className="block">
                        Contact us now for a demo of the MYMUP Platform.
                    </span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-darkGrey bg-white"
                        >
                            Request demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;
