import React from 'react'

//COMPONENTS
import HeroCarousel from '../components/home/HeroCarousel'
import DynamicSystem from '../components/home/DynamicSystem'
import MainCustomers from '../components/home/MainCustomers'
import TestimonialSlider from '../components/TestimonialSlider'

const Homepage = () => {
    return (
        <div>
            <div className="w-screen h-screen flex justify-center relative top-0">
                <HeroCarousel/>
            </div>

            <DynamicSystem/>

            <MainCustomers/>

            <div className="w-screen h-screen flex justify-center relative top-0">
                <TestimonialSlider/>
            </div>
        
        </div>
        
    )
}

export default Homepage