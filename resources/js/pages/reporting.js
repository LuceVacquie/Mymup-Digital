import React from "react";

//ASSETS
import HeroImg from "../../../public/assets/about-us.jpg";
import EvidenceImg from "../../../public/assets/reporting-evidence.png";
import ImpactReportImg from "../../../public/assets/reporting-impact-reports.png";
import MonitoringImg from "../../../public/assets/reporting-monitoring-reports.png";

//COMPONENTS
import HeroSection from "../components/HeroSection";
import FeatureParagraph from "../components/FeatureParagraph";

const content = [
    {
        title: "Evidence-based Assessments",
        text: `MYMUP Digital provides a range of evidence-based assessment
        tools. These enable you to improve the quality of the data
        you collect, measuring distance travelled and ensuring
        effectiveness of service.`,
        img: EvidenceImg,
        alt: "",
    },
    {
        title: "Impact Reports",
        text: `Simple to use, real time reporting enables you to measure
        impact and provides insights to inform commissioning.`,
        img: ImpactReportImg,
        alt: "",
    },
    {
        title: "Monitoring Reports",
        text: `A range of reports are available including demographic,
        staff caseload and organisation activity reports to inform
        your service. Quick and accurate reporting reduces
        administrative burden, improving your ability to manage
        workload and demonstrate effectiveness.`,
        img: MonitoringImg,
        alt: "",
    },
];

const Reporting = () => {
    return (
        <div>
            <HeroSection img={HeroImg} title={"Reporting"} />

            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/356175819?h=1070cd579a"
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

export default Reporting;
