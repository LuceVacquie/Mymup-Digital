import React from "react";

//ASSETS
import SuzanneImg from "../../../../public/assets/suzanne-elster.jpg";
import AndrewImg from "../../../../public/assets/andrew-claypole.jpg";
import DanielImg from "../../../../public/assets/daniel-carroll.jpg";
import RossImg from "../../../../public/assets/ross-elliot.jpg";
import KaelaImg from "../../../../public/assets/kaela-shuttleworth.jpg";
import MichaelImg from "../../../../public/assets/michael-davis.jpg";

//COMPONENTS
import TeamCard from "./TeamCard";

const teamMembers = [
    {
        name: "Suzanne Elster",
        img: SuzanneImg,
        jobRole: "Operations Director",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Andrew Claypole",
        img: AndrewImg,
        jobRole: "IT Manager",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Daniel Carroll",
        img: DanielImg,
        jobRole: "Media/Communications & Content Development",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Ross Elliot",
        img: RossImg,
        jobRole: "Account Manager & Content Development",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Kaela Shuttleworth",
        img: KaelaImg,
        jobRole: "Account Manager & Administration",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Michael Davis",
        img: MichaelImg,
        jobRole: "Content Development",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
];

const MeetTeam = () => {
    return (
        <div className="">
            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl sm:text-5xl text-darkGrey mb-8 sm:mb-12">
                    Meet the Team
                </h2>
                <div className="flex flex-wrap justify-between">
                    {teamMembers.map((item) => (
                        <TeamCard
                            key={item.name}
                            img={item.img}
                            name={item.name}
                            jobRole={item.jobRole}
                            facebookLink={item.facebookLink}
                            twitterLink={item.twitterLink}
                            youtubeLink={item.youtubeLink}
                            vimeoLink={item.vimeoLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetTeam;
