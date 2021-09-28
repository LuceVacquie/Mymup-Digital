import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";
import DigitiseImg from "../../../public/assets/data-flow-digitise.png";
import AccessibleImg from "../../../public/assets/data-flow-accessible.png";
import DemonstrateImg from "../../../public/assets/data-flow-demonstrate.png";
import IgImg from "../../../public/assets/data-flow-ig.png";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import FeatureParagraph from "../components/FeatureParagraph";

const content = [
    {
        title: "Digitise Workflow",
        text: `Go paperless and digitise your service with MYMUP Digital. With a range of modules including safeguarding, 
        needs and risks, audits and supervisions you can meet all of your service needs. Clients can be assigned to 
        multiple staff, projects and pathways to ensure the most accurate and flexible recording for your service.`,
        img: DigitiseImg,
        alt: "Digitise Workflow",
    },
    {
        title: "Accessible on-the-go",
        text: `MYMUP Digital is a web application which works on all devices with an internet connection. Client records 
        can be updated wherever you are, reducing the need to wait until staff are back in the office.`,
        img: AccessibleImg,
        alt: "Accessible on-the-go",
    },
    {
        title: "Demonstrate Impact",
        text: `MYMUP Digital enables social model activity such as peer support and guided self-help to be captured 
        and delivered to the NHS Mental Health Services Data Set. Using standardised SNOMED codes, the data you input 
        is securely submitted to MHSDS on a monthly basis.`,
        img: DemonstrateImg,
        alt: "Demonstrate Impact",
    },
    {
        title: "IG",
        text: `We put data security at the heart of our products. MYMUP Digital is fully GDPR compliant. Data rights and 
        privacy policies are easily accessible to workers and clients. Client data can be extracted at the touch of a 
        button should they request it. Data is sent encrypted with two-factor authentication.`,
        img: IgImg,
        alt: "Secure and GDPR compliant",
    },
];

const DataFlow = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"Data Flow"} />

            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/356176247?h=8f86f25614"
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

            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/356140968?h=be81fdcf87"
                    width="640"
                    height="360"
                    frameborder="0"
                    allowfullscreen
                    className="mx-auto"
                ></iframe>
            </div>
        </div>
    );
};

export default DataFlow;
