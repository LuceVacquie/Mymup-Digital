import React, { useState } from "react";

const FunctionsCard = ({
    img,
    title,
    description,
    href,
    buttonColour,
    bgColour,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className="flex-1"
        >
            <div className={`bg-lightGrey hover:bg-${bgColour}`}>
                <img src={img} className="hidden md:h-56 md:w-full md:block" />
                <div className="px-10 py-8">
                    <h3
                        className="text-2xl pb-4 sm:pb-10"
                        style={{ color: isHovered ? "white" : "#38373C" }}
                    >
                        {title}
                    </h3>
                    <p
                        className="pb-4 sm:pb-10"
                        style={{
                            color: isHovered ? "white" : "#87868a",
                        }}
                    >
                        {description}
                    </p>
                    <a
                        href={href}
                        className={`bg-${buttonColour} px-4 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm uppercase text-white lg:px-10`}
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FunctionsCard;
