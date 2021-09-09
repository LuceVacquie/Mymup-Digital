import React from 'react'

//COMPONENTS
import SocialMedia from './SocialMedia'

const navigation = {
    quickLinks: [
      { name: 'About us', href:'/about'},
      { name: 'MYMUP Platform', href:'/mymup-platform'},
      { name: 'Contact us', href:'/contact'},
    ],
    legal: [
        { name: 'Terms & Conditions', href:'/terms-conditions'},
        { name: 'Privacy Policy', href:'/privacy-policy'},
        { name: 'Cookies', href:'/cookies'},
      ],
}

const Footer = () => {
    return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Find us</h3>
                  <p className="mt-4 space-y-4">
                    MYMUP Digital
                    Regus 1st Floor East Suite
                    The Waterfront
                    Shipley
                    West Yorkshire
                    BD17 7TD
                  </p>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Get in touch</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick links</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.quickLinks.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                            </a>
                        </li>
                        ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                            </a>
                        </li>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <SocialMedia/>
            </div>
            <div className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                <p>
                    2021 &copy; MYMUP Digital
                </p>
                <p>
                    MYMUP Digital is a subsidiary of the MYMUP Group.
                </p> 
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;