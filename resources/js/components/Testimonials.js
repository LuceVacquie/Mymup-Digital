import React from "react";

const Testimonial = ({ text, author, role }) => {
    return (
        <div className="h-full w-full mx-auto overflow-hidden">
            <div className="h-full relative max-w-6xl mx-auto">
                <div className="relative">
                    <blockquote className="mt-10">
                        <div className="max-w-3xl mx-auto text-center text-sm leading-7 sm:text-base sm:leading-9 font-bold text-darkGrey">
                            {text}
                        </div>
                        <footer className="mt-8">
                            <div className="">
                                <div className="mt-3 text-center md:mt-0 md:ml-4 ">
                                    <div className="text-sm font-bold text-blue sm:text-base">
                                        {author}
                                    </div>
                                    <div className="text-sm font-medium text-mediumGrey sm:text-base">
                                        {role}
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
