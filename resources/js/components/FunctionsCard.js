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
                <img src={img} className="h-56 w-full" />
                <div className="px-10 py-8">
                    <h3
                        className="text-2xl pb-10"
                        style={{ color: isHovered ? "white" : "#38373C" }}
                    >
                        {title}
                    </h3>
                    <p
                        className="pb-10"
                        style={{
                            color: isHovered ? "white" : "#87868a",
                        }}
                    >
                        {description}
                    </p>
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
