import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";
import ActivitiesImg from "../../../public/assets/online-support-activities.png";
import VirtualWorldImg from "../../../public/assets/online-support-virtual-world.png";
import WebinarImg from "../../../public/assets/online-support-webinar.png";
import ScrapbookImg from "../../../public/assets/online-support-scrapbook.png";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import FeatureParagraph from "../components/FeatureParagraph";

const content = [
    {
        title: "Online Activities",
        text: `Your activities are digitised for users to complete in their own time. Interactive quizzes, videos 
        and specialist advice can be utilised to promote self-care.`,
        img: ActivitiesImg,
        alt: "Online Activities",
    },
    {
        title: "Virtual World",
        text: `Gamification motivates users to undertake activities, maximising engagement and enjoyment. Our 
        virtual world includes a shop where users can exchange points for meaningful items to add to their world.`,
        img: VirtualWorldImg,
        alt: "MYMUP Virtual World",
    },
    {
        title: "LIVE Webinar",
        text: `LIVE Webinar allows staff to hold video 1-1 and seminars with users. It can be used in seminar mode 
        to promote health messages to a wider audience increasing reach. Alternatively, 1-1 mode can be used to increase 
        accessibility, capacity and guided self-care. LIVE sessions can be recorded and used to create online 
        interventions too.`,
        img: WebinarImg,
        alt: "LIVE Webinar",
    },
    {
        title: "Digital Scrapbook",
        text: `A personal wellness hub for users to upload images, documents, videos and audio. This area can be 
        accessible to staff, helping to encourage conversations and increase engagement with users.`,
        img: ScrapbookImg,
        alt: "Digital Scrapbook",
    },
];

const OnlineSupport = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"Online Support"} />

            <div className="bg-white">
                <div className="max-w-2xl md:max-w-3xl mx-auto px-4 py-8 md:py-24 sm:py-28 sm:px-6 lg:px-8 lg:max-w-5xl xl:max-w-6xl">
                    <p className="max-w-4xl mx-auto text-center text-lg md:text-2xl text-mediumGrey mb-8">
                        We believe that you are the expert in your service!
                    </p>
                    <p className="max-w-4xl mx-auto text-center text-lg md:text-2xl text-mediumGrey">
                        We work with you to create specialist, digital
                        interventions available exclusively to your service
                        users. Providing a digital first offer to your service
                        users can reduce waiting lists, promote self-care and
                        enable service users to feel empowered and involved in
                        their own health and wellbeing.
                    </p>
                </div>
            </div>

            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/356175413?h=81a94cb989"
                    width="640"
                    height="360"
                    frameborder="0"
                    allowfullscreen
                    className="mx-auto"
                ></iframe>
            </div>

            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold text-darkGrey mb-4 sm:mb-8">
                    Features
                </h3>
                {content.map((item, index) => (
                    <FeatureParagraph
                        title={item.title}
                        text={item.text}
                        img={item.img}
                        isLeftAlign={index % 2}
                    />
                ))}
            </div>
        </div>
    );
};

export default OnlineSupport;
