import React from 'react'
import logo from '../assets/bges-logo-v1.png'

const Navbar = () => {
  return (
    <nav className='p-3 fixed w-full top-0 '>
      <img src={logo} alt="logo" className='h-[70px]' />
    </nav>
  )
}

export default Navbar
