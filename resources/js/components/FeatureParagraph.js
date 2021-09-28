import React from "react";

const FeatureParagraph = ({ title, text, img, alt, isLeftAlign }) => {
    return (
        <div className="mt-8 sm:mt-12">
            {isLeftAlign ? (
                <div className="flex flex-col xl:flex-row">
                    <div className="flex-1 mt-8 xl:mt-0">
                        <img src={img} alt={alt} />
                    </div>
                    <div className="flex-initial max-w-3xl pl-8">
                        <h4 className="text-2xl text-darkGrey mb-4 sm:mb-8">
                            {title}
                        </h4>
                        <p className="text-mediumGrey">{text}</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col xl:flex-row">
                    <div className="flex-initial max-w-3xl pr-8">
                        <h4 className="text-2xl text-darkGrey mb-4 sm:mb-8">
                            {title}
                        </h4>
                        <p className="text-mediumGrey">{text}</p>
                    </div>

                    <div className="flex-1 mt-8 xl:mt-0">
                        <img src={img} alt={alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeatureParagraph;
