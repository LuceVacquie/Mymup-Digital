import React from 'react'

//COMPONENTS
import FunctionsCard from './FunctionsCard'

//ASSETS
import ReportingImg from '../../../../public/assets/reporting.jpg'
import DataFlowImg from '../../../../public/assets/data-flow.jpg'
import OnlineSupportImg from '../../../../public/assets/dynamic-care.jpg'

const content = [
    {
        img: ReportingImg,
        title: 'Recording and Reporting',
        description: 'MYMUP digital provides an easy to use, mobile and secure recording platform for professionals using validated assessments. Our in built tools automatically create output and outcome reports for your audiences.',
        href:'/',
        buttonColour: 'pink'
    },
    {
        img: DataFlowImg,
        title: 'Data Flow',
        description: 'Uniquely, MYMUP digital flows your output and outcome data, on your behalf, to the Mental Health Services Dataset.',
        href:'/',
        buttonColour: 'purple'
    },
    {
        img: OnlineSupportImg,
        title: 'Online Support',
        description: 'An extensive co-created digital self-care & support module that complements face to face support for better outcomes and access to 24/7 care.',
        href:'/',
        buttonColour: 'orange'
    }
]

const DynamicSystem = () => {
    return (
        <div className="bg-lightGrey">
           <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
                <h2 className="text-center text-5xl text-darkGrey mb-12">MYMUP's Three Functions</h2>
                <div className="flex justify-between space-x-10">
                    {content.map((item)=> (
                        <FunctionsCard key={item.title} img={item.img} title={item.title} description={item.description} href={item.href} buttonColour={item.buttonColour}/>
                    ))}
                </div>
            </div> 
        </div>
    )
}

export default DynamicSystem