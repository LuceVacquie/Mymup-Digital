import React, { useState, useRef, useEffect } from 'react'

//COMPONENTS
import { Testimonial1, Testimonial2, Testimonial3, Testimonial4 } from './Testimonials'

const testimonials = [
    {
        id:1,
        component: Testimonial1()
    }, 
    {
        id:2,
        component: Testimonial2()
    },
    {
        id:3,
        component: Testimonial3()
    },
    {
        id:4,
        component: Testimonial4()
    },
]

const delay = 5000

const TestimonialSlider = () => {

    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    const resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);


    return (
        <div className="bg-lightGrey overflow-hidden w-full relative top-0">
            <div 
                className="whitespace-nowrap transition duration-1000 ease" 
                style={{ transform: `translate3d(0, ${-index * 100}%, 0)` }}
            >
            {testimonials.map((item) => (
                <div className="whitespace-normal inline-block w-full relative h-screen" key={item.id}>
                    {testimonials.component}
                </div>
            ))}
            </div>

            <div className="absolute w-full text-center z-10 -mt-44">
            {testimonials.map((_, idx) => (
                <div 
                    className="inline-block h-4 w-4 rounded-full pointer m-6 bg-lightTeal active:bg-turquoise" 
                    key={idx}
                    onClick={() => {setIndex(idx)}}
                ></div>
            ))}
            </div>
        </div>
    )
}

export default TestimonialSlider