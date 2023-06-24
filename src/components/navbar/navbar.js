import React from 'react'
import {logo} from '/Users/user/Desktop/interactive-react-portfolio/src/assets/index.js'
import { navLinkdata } from '/Users/user/Desktop/interactive-react-portfolio/src/constants/index.js'

const Navbar = () => {
  return (
    <div className='w-full h-20 mx-auto flex justify-between items-center'>
        <div>  
            <img src={logo} alt='logo' />
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar