import React from "react";

//COMPONENTS
import QuestionSolution from "./QuestionSolution";

const content = [
    {
        id: 1,
        problem:
            "We can't record and report all 3 functions of work in one place. We have to use 2 systems which is frustrating.",
        solution: `MYMUP records all 3 functions in one place in a simple way with specific , SNOMED coded linked, activities for ease of recording and to enable MHSDS flow (when possible)
            Function 1: direct support
            Function 2: whole school work
            Function 3: advice and liaison`,
    },
    {
        id: 2,
        problem:
            "The NHS England reporting keeps changing. It takes lots of time to then amend our reporting systems.",
        solution:
            "We amend our reporting systems according to NHS England reporting requirements. Any new field requirements will be built in.",
    },
    {
        id: 3,
        problem:
            "Our reporting system is too complicated for our trainees and clinicians.",
        solution:
            "MYMUP is simple, designed in partnership with practitioners/ clinicians",
    },
    {
        id: 4,
        problem: "I don’t understand MHSDS flow and SNOMED codes properly.",
        solution:
            "MHSDS and SNOMED codes are complicated. That's why we have consultants who understand it in detail and do this work for you (so you can get on and focus on helping children and young people)",
    },
    {
        id: 5,
        problem: `We need a self help offer to support our children and young people in between sessions or while they wait for support.`,
        solution: `We have a wide and increasing range of self-help modules available to MYMUP users`,
    },
];

const Mhst = ({ isMiddleSection }) => {
    
    return (
        <div className="bg-lightGrey">
            <div className="max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-20 sm:py-28 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl sm:text-5xl text-darkGrey mb-8 sm:mb-12">
                    MHST
                </h2>
                <div className="">
                    {content.map((item) => (
                        <QuestionSolution
                            key={item.id}
                            problem={item.problem}
                            solution={item.solution}
                            isMiddleSection={isMiddleSection}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mhst;
