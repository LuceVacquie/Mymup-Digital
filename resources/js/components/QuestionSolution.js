import React from "react";

const QuestionSolution = ({ content }) => {
    return (
        <div className="bg-lightGrey">
            <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <h2 className="text-center text-5xl text-darkGrey mb-12">
                    MYMUP's Solutions
                </h2>
                <div className="">
                    {content.map((item) => (
                        <div key={item.id}>
                            <div>{item.problem}</div>
                            <div>{item.solution}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionSolution;
