import React from 'react'

const MainCustomers = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8">
            <h2 className="text-center text-5xl text-darkGrey mb-12">Who are you?</h2>
            <div className="flex justify-between space-x-10">
                <a href="/" className="flex-1 text-center py-8 px-8 bg-lightGrey">
                    CCG/ ICS Commissioners
                </a>
                <a href="/" className="flex-1 text-center py-8 px-8 bg-lightGrey">
                    MHST
                </a>
                <a href="/" className="flex-1 text-center py-8 px-8 bg-lightGrey">
                    3rd Sector Provider
                </a>
            </div>
        </div>
    )
}

export default MainCustomers