import React from "react";

const Slide = ({ title, text, img, isModalVisible, setIsModalVisible }) => {
    return (
        <div className="relative h-full w-full mx-auto">
            <div className="h-full relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-cover"
                        src={img}
                        alt=""
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: "rgba(255, 255, 255, 0.5)" }}
                    />
                </div>
                <div className="relative flex flex-col h-full justify-center max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="w-full sm:w-2/3 md:w-1/2">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-darkGrey">{title}</span>
                        </h1>
                        <p className="mt-6 text-xl text-grey ">{text}</p>
                        <div className="mt-10 flex">
                            <div className="flex">
                                <button
                                    onClick={() => {
                                        setIsModalVisible(!isModalVisible);
                                    }}
                                    className="flex justify-center items-center px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm text-black bg-yellow"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Watch video
                                </button>
                                <a
                                    href="/contact"
                                    className="ml-4 flex justify-center items-center px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm text-black bg-yellow"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Request demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
