import React, { useState } from "react";

//COMPONENTS
import HeroCarousel from "../components/home/HeroCarousel";
import DynamicSystem from "../components/DynamicSystem";
import MainCustomers from "../components/home/MainClients";
import TestimonialSlider from "../components/TestimonialSlider";
import CTA from "../components/Cta";
import Contact from "../components/home/Contact";
import Modal from "../components/home/Modal";

const Homepage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    console.log("ere");

    return (
        <div className="relative">
            <div className="w-screen h-screen flex justify-center relative top-0">
                <HeroCarousel
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                />
            </div>

            {isModalVisible && (
                <Modal
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                />
            )}

            <DynamicSystem />

            <MainCustomers />

            <div className="w-screen flex justify-center">
                <TestimonialSlider />
            </div>

            <CTA />

            <Contact />
        </div>
    );
};

export default Homepage;
