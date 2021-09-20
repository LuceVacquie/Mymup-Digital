import React from "react";

//COMPONENTS
import QuestionSolution from "./QuestionSolution";

const content = [
    {
        id: 1,
        problem:
            "I need to be able to flow data to the MHSDS for my CCG commissioners. It has been mandatory since April 2020.",
        solution:
            "MYMUP will flow your data for you. Many systems that 3rd sector providers use can’t flow the data. All you have to do is enter your client info and we do the rest.",
    },
    {
        id: 2,
        problem: "I don’t understand the MHSDS. It's too complicated",
        solution:
            "It is complicated. That's why we do it for you. We sort SNOMED coding, MHSDS compliance, data flow and data rejection issues.",
    },
    {
        id: 3,
        problem:
            "My staff do not have many IT skills. They find the recording of information on online systems daunting.",
        solution:
            "MYMUP is designed with 3rd sector providers in mind, to be as simple as possible. We provide support and staff training including helping to complete your mandatory DSP toolkit.",
    },
    {
        id: 4,
        problem:
            "We're only a small 3rd sector provider. We don’t have a data lead to sort all of this.",
        solution:
            "MYMUP sorts all of this. We have a support team and do the work for you.",
    },
];

const Mhst = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <h2 className="text-center text-5xl text-darkGrey mb-12">
                    Third Sector
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

export default Mhst;
