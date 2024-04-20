import React from 'react'
import logo from "../assets/images/logo.png"

function Navbar() {
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
        <img 
        className='h-10 w-auto'
            src={ logo }
            alt='React-Jobs'
        />
        
    </nav>
  )
}

export default Navbar
