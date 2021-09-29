import React, { useState, useRef, useEffect } from "react";

//COMPONENTS
import Slide from "./HeroSlides.js";

//ASSETS
import Slide1 from "../../../../public/assets/slide1.jpg";
import Slide2 from "../../../../public/assets/slide2.jpg";

const delay = 5000;

const HeroCarousel = ({ isModalVisible, setIsModalVisible }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    const slides = [
        {
            id: 1,
            component: (
                <Slide
                    title="Designed in collaboration."
                    text="MYMUP Digital is a simple, but powerful, recording, reporting and self help tool, designed in collaboration with service users and health care professionals. MYMUP Digital empowers mental health services and practitioners to easily record their work and effectively demonstrate impact to commissioners, as well as flowing to the Mental Health Services Dataset on your behalf."
                    img={Slide1}
                    alt="Designed in collaboration"
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                />
            ),
        },
        {
            id: 2,
            component: (
                <Slide
                    title="Transforming digital."
                    text="MYMUP is a customisable web application designed in collaboration with service users and health care professionals. MYMUP encompasses three pillars enabling VCS organisations to transform their digital offer, compliment their existing delivery and effectively measure impact."
                    img={Slide2}
                    alt="Transforming digital"
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                />
            ),
        },
    ];

    return (
        <div className="overflow-hidden w-full relative top-0">
            <div
                className="whitespace-nowrap transition duration-1000 ease"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slides.map((slide) => (
                    <div
                        className="whitespace-normal inline-block w-full relative h-screen"
                        key={slide.id}
                    >
                        {slide.component}
                    </div>
                ))}
            </div>

            <div className="absolute w-full text-center z-10 -mt-44">
                {slides.map((_, idx) => (
                    <div
                        className="inline-block h-4 w-4 rounded-full pointer m-6 bg-lightTeal active:bg-turquoise"
                        key={idx}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};
export default HeroCarousel;
