import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Contact = () => {

    const mapStyles = {        
        height: "100vh",
        width: "100%"
    }
      
    const defaultCenter = {
    lat: 53.8376455892325, lng: -1.7827000014917709
    }
    
    return (
      <div className="flex flex-col bg-lightGrey md:flex-row">

        <div className="flex-1">
          <div className="h-full md:h-1/2">
            <LoadScript googleMapsApiKey='AIzaSyC1tpFlbEhKzoF-GbaBrzjyeLlLbE6XVQk' className="h-full w-full object-cover">
                <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                />
            </LoadScript>
          </div>
        </div>
        
        <div className="flex-1 relative py-16 px-4 sm:py-24 sm:px-6 lg:px-28 lg:max-w-7xl lg:mx-auto lg:py-32">
        
            <div className="mx-auto lg:mx-0">
                <div class="w-6 h-1 bg-blue mb-6 rounded-lg"></div>
                <h2 className="text-3xl font-extrabold text-darkGrey tracking-tight sm:text-4xl">Get in touch</h2>
                <h3 className="mt-4 text-lg text-darkGrey sm:mt-3">
                    Want to know more?
                </h3>
                <p className="mt-4 text-mediumGrey sm:mt-3">
                    Fill in the form below and one of our team will be in touch.
                </p>

                <form action="#" method="POST" className="mt-9">

                    <div className="flex justify-between space-x-10 mb-5">
                        <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        className="block w-full border-none sm:text-sm px-5 py-4"
                        />
                    
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        className="block w-full border-none sm:text-sm px-5 py-4"
                        />
                    </div>

                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        aria-describedby="phone-description"
                        placeholder="Telephone number"
                        className="block w-full border-none sm:text-sm mb-5 px-5 py-4"
                    />

                    <textarea
                        id="message"
                        name="message"
                        aria-describedby="message"
                        rows={4}
                        placeholder="Your message"
                        className="block w-full border-none sm:text-sm mb-5 px-5 py-4"
                        defaultValue={''}
                    />
            
                    
                    <button
                    type="submit"
                    className="px-10 py-4 border border-transparent text-xs font-medium rounded-sm shadow-sm uppercase text-darkGrey bg-yellow"
                    >
                    Send message
                    </button>

                </form>
            </div>
       
        </div>

      </div>
    )
}

export default Contact
  