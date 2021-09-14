import React from 'react'

//ASSETS
import Slide1 from '../../../../public/assets/slide1.jpg'
import Slide2 from '../../../../public/assets/slide2.jpg'

export const FirstHeroSection = () => {
    return(
        <div className="h-full w-full mx-auto">
            <div className="h-full relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-cover"
                        src={Slide1}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-200 opacity-50 mix-blend-multiply" />
                </div>
                <div className="relative flex flex-col h-full justify-center max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="w-1/2">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-darkGrey">Designed in collaboration.</span>
                        </h1>
                        <p className="mt-6 text-xl text-grey ">
                            MYMUP Digital is a simple, but powerful, recording, reporting and self help tool, designed in collaboration with service users and health care professionals.
                            MYMUP Digital empowers mental health services and practitioners to easily record their work and effectively demonstrate impact to commissioners, as well as flowing to the Mental Health Services Dataset on your behalf.
                        </p>
                        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
                            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-2">
                                <a
                                    href="#"
                                    className="flex justify-center items-center px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm text-black bg-yellow"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                    Watch video
                                </a>
                                <a
                                    href="#"
                                    className="flex justify-center items-center px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm text-black bg-yellow"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                                    </svg>
                                    Request demo
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export const SecondHeroSection = () => {
    return(
        <div className="h-full w-full mx-auto">
            <div className="h-full relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="h-full w-full object-cover"
                        src={Slide2}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-200 opacity-50 mix-blend-multiply" />
                </div>
                <div className="relative flex flex-col h-full justify-center max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="w-1/2">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-darkGrey">Transforming digital.</span>
                        </h1>
                        <p className="mt-6 text-xl text-grey">
                            MYMUP Digital is a simple, but powerful, recording, reporting and self help tool, designed in collaboration with service users and health care professionals.
                            MYMUP Digital empowers mental health services and practitioners to easily record their work and effectively demonstrate impact to commissioners, as well as flowing to the Mental Health Services Dataset on your behalf.
                        </p>
                        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
                            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-2">
                                <a
                                    href="#"
                                    className="flex justify-center items-center px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm text-black bg-yellow"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                    Watch video
                                </a>
                                <a
                                    href="#"
                                    className="flex justify-center items-center px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm text-black bg-yellow"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                                    </svg>
                                    Request demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}