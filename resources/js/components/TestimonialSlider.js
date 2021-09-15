import React, { useState, useRef, useEffect } from 'react'

//COMPONENTS
import Testimonial from './Testimonials'

const content = [
    {
        text: `I know we've a lot to do to improve our children’s mental health services but today I heard excellent feedback about our work with @MYMUPUK! This service consistently receives good feedback 
        from parents, hospital, schools, services and young people.`,
        author: 'Sasha Bhat',
        jobRole: 'Head of Commissioning for Mental Health, Bradford CCG'
    },
    {
        text: `I am supportive of the work MYMUP is involved with relating to digital transformation of services within mental health and community services in Bradford. MYMUP has a shared vision with 
        commissioners, partners and voluntary sector to develop services that are accessible virtually and support efforts for self-help and prevention which will help deliver system change and improvement 
        for the health sector in the District.`,
        author: 'Farhan Rafiq',
        jobRole: 'Head of Business & Service Development, Bradford District Care Trust'
    },
    {
        text: `We have been working with the MYMUP team to design a new database for our organisation as our current system is not fit for purpose. This will involve transitioning data over as well as 
        making us compatible to submit data to the MHSDS. Our experience is that MYMUP have a good understanding of the differing needs we face as a smaller voluntary sector organisation trying to submit 
        data to a statutory body. We have had previous frustrations speaking directly with NHS Digital who have limited understanding of our service and processes and it has been really helpful and 
        supportive to have MYMUP as the advocate on our behalf. We find the team to be very approachable, quick to respond and highly supportive.`,
        author: 'Ruth Hirst',
        jobRole: 'Operations Co-ordinator, The Market Place'
    },
    {
        text: `As a database which has been purpose-built with mental health services in mind, MYMUP gives us potential to really showcase and evidence the depth and quality of what we do. It can allow us 
        to collate information showing the detail of our trauma and attachment focussed therapy approach in a way that we have never previously had before.`,
        author: 'Catherine Tatman',
        jobRole: `Clinical Lead and Child Psychotherapist, Children's Trauma Therapy Service, Family Action`
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
                    prevIndex === content.length - 1 ? 0 : prevIndex + 1
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
            {content.map((item) => (
                <Testimonial className="whitespace-normal inline-block w-full relative h-screen" 
                key={item.author} 
                text={item.text}
                author={item.author}
                jobRole={item.jobRole}
                />
            ))}
            </div>

            <div className="absolute w-full text-center z-10 -mt-44">
            {content.map((_, idx) => (
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