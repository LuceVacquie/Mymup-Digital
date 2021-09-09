import React from 'react'

//ASSETS
import Facebook from '../../../public/assets/facebook.png'
import Twitter from '../../../public/assets/twitter.png'
import Youtube from '../../../public/assets/youtube.png'
import Vimeo from '../../../public/assets/vimeo.png'

const social = [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter
    },
    {
        name: 'YouTube',
        href: '#',
        icon: Youtube
      },
    {
      name: 'Vimeo',
      href: '#',
      icon: Vimeo
    },
]

const SocialMedia = () => {
    return(
      <div className="flex space-x-1">
        {social.map((item) => (
          <a key={item.name} href={item.href} className="flex justify-center items-center h-10 w-10 rounded-full bg-lightGrey text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <img src={item.icon} className="h-3"/>
          </a>
        ))}
      </div>
    )
}

export default SocialMedia;