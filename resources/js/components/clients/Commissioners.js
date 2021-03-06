import React from "react";

//COMPONENTS
import QuestionSolution from "./QuestionSolution";

const content = [
    {
        id: 1,
        problem:
            "Your MHSDS data doesn’t reflect all your commissioned or jointly commissioned services.  It has been mandatory since April 2020. Need all your commissioned or part commissioned services including the 3rd sector to flow their data? Your 3rd sector providers don’t have a system that can flow data to the MHSD.",
        solution: (
            <p>
                MYMUP can be commissioned by you for your 3rd sector providers.
                We have a proven track record of 3rd sector use and data flow.
                We provide a simple to use tool that practitioners engage with.
                We flow data on their behalf to relieve them of the complex
                process and frequent MHSDS rejections. This gives you access to
                <a
                    href="https://www.england.nhs.uk/wp-content/uploads/2020/01/FINAL-CQUIN-20-21-Indicator-Specifications-190220.pdf"
                    target="_blank"
                    className="text-darkGrey"
                >
                    {" "}
                    CQUIN CCG7
                </a>
                .
            </p>
        ),
    },
    {
        id: 2,
        problem:
            "You need a digital self help offer that doesn’t costs £10k + in addition to your R&R tool?",
        solution:
            "Our digital offer is embedded in our system. No need for additional purchase.",
    },
    {
        id: 3,
        problem:
            "Your SPA & MHST are being inundated with referrals. You need to cut waiting times to support",
        solution:
            "Our self help tool means your SPA team can direct anyone on their waiting list to MYMUP self help",
    },
    {
        id: 4,
        problem: `I don’t understand the MHSDS. It's too complicated.`,
        solution: `It is complicated. That's why we do it for you. We sort SNOMED coding, MHSDS compliance, data flow and data rejection issues.`,
    },
    {
        id: 5,
        problem:
            "I need to see my service data in simple charts showing me how much work they did and how well they did it.",
        solution:
            "MYMUP automatically creates charts for providers. This includes outputs (how much) and outcomes (how well) using standardised and MHSDS compliant measures.",
    },
];

const Commissioners = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-20 md:py-16 sm:px-6 lg:px-8 sm:py-28">
                <h2 className="text-center text-4xl sm:text-5xl text-darkGrey mb-8 sm:mb-12">
                    Commissioners
                </h2>
                <div className="">
                    {content.map((item) => (
                        <QuestionSolution
                            key={item.id}
                            problem={item.problem}
                            solution={item.solution}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Commissioners;
