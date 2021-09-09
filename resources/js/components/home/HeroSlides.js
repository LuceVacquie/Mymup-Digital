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
                <div className="relative flex flex-col h-full justify-center max-w-lg mx-auto sm:max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-darkGrey">Designed in collaboration.</span>
                    </h1>
                    <p className="mt-6 text-xl text-grey ">
                        MYMUP Digital is a simple, but powerful, recording, reporting and self help tool, designed in collaboration with service users and health care professionals.
                        MYMUP Digital empowers mental health services and practitioners to easily record their work and effectively demonstrate impact to commissioners, as well as flowing to the Mental Health Services Dataset on your behalf.
                    </p>
                    <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
                        <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
                            <a
                                href="#"
                                className="flex justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow"
                            >
                                Watch video
                            </a>
                            <a
                                href="#"
                                className="flex justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow"
                            >
                                Request demo
                            </a>
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
                <div className="relative flex flex-col h-full justify-center max-w-lg mx-auto sm:max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-darkGrey">Transforming digital.</span>
                    </h1>
                    <p className="mt-6 text-xl text-grey ">
                        MYMUP Digital is a simple, but powerful, recording, reporting and self help tool, designed in collaboration with service users and health care professionals.
                        MYMUP Digital empowers mental health services and practitioners to easily record their work and effectively demonstrate impact to commissioners, as well as flowing to the Mental Health Services Dataset on your behalf.
                    </p>
                    <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
                        <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
                            <a
                                href="#"
                                className="flex justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow"
                            >
                                Watch video
                            </a>
                            <a
                                href="#"
                                className="flex justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow"
                            >
                                Request demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}