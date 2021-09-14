import React from 'react'

//COMPONENTS
import SocialMedia from './SocialMedia'

const Header = () => {
    return(
        <div className="block top-0 w-full border-b-2 border-lightGrey">
            <div className="flex w-full justify-between items-center max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <SocialMedia/>
                <div className="flex">
                    <div className="flex items-center">
                        <div className="text-blue">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div className="ml-2 text-darkGrey">Call on<a href="tel:01274 897714" className="text-mediumGrey"> 01274 897714</a></div>
                    </div>
                    <div className="flex items-center ml-4">
                        <div className="text-blue">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-2 text-darkGrey">Email<a href="mailto:info@mymup.org" className="text-mediumGrey"> info@mymup.org</a></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header