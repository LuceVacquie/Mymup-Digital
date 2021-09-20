import React from "react";

const QuestionSolution = ({ problem, solution }) => {
    return (
        <div className="flex flex-col mb-16">
            <div className="p-4 relative max-w-xl break-words shadow-md rounded-sm self-start bg-lightGrey ">
                <p>{problem}</p>
            </div>
            <div className="p-4 relative max-w-xl break-words shadow-md rounded-sm self-end bg-blue text-white">
                <p>{solution}</p>
            </div>
        </div>
    );
};

export default QuestionSolution;