import React from 'react'
import {logo} from '/Users/user/Desktop/interactive-react-portfolio/src/assets/index.js'
import { navLinkdata } from '/Users/user/Desktop/interactive-react-portfolio/src/constants/index.js'

const Navbar = () => {
  return (
    <div className='w-full h-20 mx-auto flex justify-between items-center font-titleFont'>
        <div>  
            <img src={logo} alt='logo' />
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {
                    navLinkdata.map(({ _id, title, link}) => (
                        <li 
                            className='text-base font-normal text-white tracking-wide cursor-pointer 
                            hover:text-designColor duration-300'
                            key={_id}
                            > 
                            {title}
                            </li>
                    )) 
                    }
            </ul>
        </div>
    </div>
  )
}

export default Navbar