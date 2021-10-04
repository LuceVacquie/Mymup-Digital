import React from "react";

const QuestionSolution = ({ problem, solution, isMiddleSection }) => {
    return (
        <div className="flex flex-col mb-12 md:mb-16">
            <div 
                className="p-4 relative max-w-lg text-sm lg:max-w-xl lg:text-base break-words shadow-md rounded-sm self-start bg-lightGrey" 
                style={{ backgroundColor: isMiddleSection ? "white" : "#f1f1f1" }}
            >
                <p>{problem}</p>
            </div>
            <div className="mt-4 p-4 relative max-w-lg text-sm lg:max-w-xl lg:text-base break-words shadow-md rounded-sm self-end bg-blue text-white">
                <p>{solution}</p>
            </div>
        </div>
    );
};

export default QuestionSolution;