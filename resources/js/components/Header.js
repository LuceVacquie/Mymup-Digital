import React from 'react'

//ASSETS
import Telephone from '../../../public/assets/telephone.svg'
import Email from '../../../public/assets/email.svg'

//COMPONENTS
import SocialMedia from './SocialMedia'

const Header = () => {
    return(
        <div className="block top-0 w-full border-b-2 border-lightGrey">
            <div className="flex w-full justify-between items-center max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <SocialMedia/>
                <div className="flex">
                    <div className="flex">
                        <img src={Telephone} alt="Telephone icon" className="h-6"/>
                        <div>Call on<a href="tel:01274 897714"> 01274 897714</a></div>
                    </div>
                    <div className="flex">
                        <img src={Email} alt="Email icon" className="h-6"/>
                        <div className="ml-4">Email<a href="mailto:info@mymup.org"> info@mymup.org</a></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header