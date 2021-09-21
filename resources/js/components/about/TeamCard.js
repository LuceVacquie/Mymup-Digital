import React, { useState } from "react";

//ASSETS
import FacebookIcon from "../../../../public/assets/facebook.png";
import TwitterIcon from "../../../../public/assets/twitter.png";
import YoutubeIcon from "../../../../public/assets/youtube.png";
import VimeoIcon from "../../../../public/assets/vimeo.png";

const TeamCard = ({
    img,
    name,
    jobRole,
    facebookLink,
    twitterLink,
    youtubeLink,
    vimeoLink,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className="p-2 w-1/2 md:w-1/3 "
        >
            <div className="bg-white border border-lightGrey" style={{boxShadow: isHovered ? '0 4px 8px 0 rgba(0, 0, 0, 0.2)' : 'none'}}>
                <img src={img} className="w-full p-2" />
                <div className="px-4 py-4 lg:py-8 text-center">
                    <p className="text-darkGrey text-lg font-bold">{name}</p> 
                    <p className="text-darkGrey text-sm lg:text-base">{jobRole}</p>
                    {isHovered && (
                        <div className="flex justify-center">
                            <a
                                href={facebookLink}
                                target="_blank"
                                className="p-2"
                            >
                                <img
                                    src={FacebookIcon}
                                    alt=""
                                    className="h-3"
                                />
                            </a>
                            <a
                                href={twitterLink}
                                target="_blank"
                                className="p-2"
                            >
                                <img src={TwitterIcon} alt="" className="h-3" />
                            </a>
                            <a
                                href={youtubeLink}
                                target="_blank"
                                className="p-2"
                            >
                                <img src={YoutubeIcon} alt="" className="h-3" />
                            </a>
                            <a href={vimeoLink} target="_blank" className="p-2">
                                <img src={VimeoIcon} alt="" className="h-3" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
