import React from "react";

const FunctionsCard = ({ img, title, description, href, buttonColour }) => {
    return (
        <div className="flex-1">
            <div className="bg-white">
                <img src={img} className="h-56 w-full" />
                <div className="px-10 py-8">
                    <h3 className="text-2xl text-darkGrey pb-10">{title}</h3>
                    <p className="pb-10 text-mediumGrey">{description}</p>
                    <a
                        href={href}
                        className={`bg-${buttonColour} px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm uppercase text-white`}
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FunctionsCard;
