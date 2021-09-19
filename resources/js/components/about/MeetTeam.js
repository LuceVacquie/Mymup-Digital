import React from "react";

//COMPONENTS
import TeamCard from "./TeamCard";

const teamMembers = [
    {
        name: "Suzanne Elster",
        img: "",
        jobRole: "Operations Director",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Andrew Claypole",
        img: "",
        jobRole: "IT Manager",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Daniel Carroll",
        img: "",
        jobRole: "Media/Communications & Content Development",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Ross Elliot",
        img: "",
        jobRole: "Account Manager & Content Development",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Kaela Shuttleworth",
        img: "",
        jobRole: "Account Manager & Administration",
        facebookLink: "",
        twitterLink: "",
        youtubeLink: "",
        vimeoLink: "",
    },
    {
        name: "Michael Davis",
        img: "",
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
            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <h2 className="text-center text-5xl text-darkGrey mb-12">
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
