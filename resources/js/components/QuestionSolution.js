import React from "react";

const QuestionSolution = ({ problem, solution }) => {
    return (
        <div>
            <div className="bg-pink p-4 max-w-lg">{problem}</div>
            <div className="bg-blue p-4 max-w-lg float-right">{solution}</div>
        </div>
    );
};

export default QuestionSolution;
