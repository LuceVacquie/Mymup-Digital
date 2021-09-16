import React, { useState, useRef, useEffect } from 'react'

//COMPONENTS
import { FirstTestimonial, SecondTestimonial, ThirdTestimonial, ForthTestimonial } from './Testimonials'

const testimonials = [
    {
        id:'1',
        component: FirstTestimonial()
    }, 
    {
        id:'2',
        component: SecondTestimonial()
    },
    {
        id:'3',
        component: ThirdTestimonial()
    },
    {
        id:'4',
        component: ForthTestimonial()
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
        <div className="bg-lightGrey w-full relative top-0 px-4 py-28 sm:px-6 lg:px-8">
            <h2 className="text-center text-5xl text-darkGrey mb-12">Testimonials</h2>

            <div className="overflow-hidden">
                <div 
                    className="whitespace-nowrap transition duration-1000 ease" 
                    style={{ transform: `translate3d(0, ${-index * 100}%, 0)` }}
                >
                    {testimonials.map((item) => (
                        <div className="whitespace-normal w-full relative" key={item.id}>
                            {item.component}
                        </div>
                    ))}
                </div>

                <div className="absolute w-full text-center z-10">
                {testimonials.map((_, idx) => (
                    <div 
                        className="inline-block h-4 w-4 rounded-full pointer m-6 bg-mediumGrey active:bg-darkGrey" 
                        key={idx}
                        onClick={() => {setIndex(idx)}}
                    ></div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider