import React from "react";

const Testimonial = ({ text, author, role }) => {
    return (
        <div className="h-full w-full mx-auto overflow-hidden">
            <div className="h-full relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <blockquote className="mt-10">
                        <div className="max-w-3xl mx-auto text-center text-md leading-9 font-bold text-darkGrey">
                            {text}
                        </div>
                        <footer className="mt-8">
                            <div className="">
                                <div className="mt-3 text-center md:mt-0 md:ml-4 ">
                                    <div className="text-base font-bold text-blue">
                                        {author}
                                    </div>
                                    <div className="text-base font-medium text-mediumGrey">
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
