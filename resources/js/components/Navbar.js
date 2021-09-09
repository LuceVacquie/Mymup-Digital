import React, { Fragment } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';

//ICONS & IMAGES
import { Popover, Transition } from '@headlessui/react'
// import {
//   MenuIcon,
//   XIcon,
// } from '@heroicons/react/outline'
import Logo from '../../../public/assets/logo.png'

//COMPONENTS
import NavLink from './NavLink'

const navigation = [
    { name: 'Home', href:'/'},
    { name: 'About us', href:'/about'},
    { name: 'MYMUP Platform', href:'/mymup-platform'},
    { name: 'Contact us', href:'/contact'},
]
  
const Navbar = () => {
    return (
        <header className="w-full z-20 bg-white overflow-hidden">
          <Popover>
          {({ open }) => (
            <>
              <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href='/'>
                        <span className="sr-only">MYMUP Digital</span>
                        <img
                        className="h-8 w-auto sm:h-10"
                        src={Logo}
                        alt="MYMUP Digital logo"
                        />
                    </a>
                  </div>
                  <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-grey hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightTeal">
                        <span className="sr-only">Open menu</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </Popover.Button>
                  </div>
                  <div className="hidden md:flex space-x-10">
                    {navigation.map((link) => (
                        <NavLink key={link.name} href={link.href} name={link.name}/>
                    ))}
                  </div>
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href='/contact' className="whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-yellow">
                        ENQUIRE NOW
                    </a>
                  </div>
              </div>

              <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
              >
                  <Popover.Panel
                  focus
                  static
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                            <img
                                className="h-8 w-auto"
                                src={Logo}
                                alt="MYMUP Digital logo"
                            />
                            </div>
                            <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-grey hover:bg-lightGrey focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightTeal">
                                <span className="sr-only">Close menu</span>
                                {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                            </Popover.Button>
                            </div>
                        </div>
                        </div>
                        <div className="py-6 px-5">
                        <div className="grid grid-cols-2 gap-4">
                            {navigation.map((link) => (
                            <NavLink key={link.name} href={link.href} name={link.name}/>
                            ))}
                        </div>
                        <div className="mt-6">
                            <a
                            href='/contact'
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-yellow"
                            >
                            ENQUIRE NOW
                            </a>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
              </Transition>
            </>
          )}
          </Popover>
        </header>
    )
}

export default Navbar
  