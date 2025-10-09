import React, { useState } from 'react'
import LogoShopping from "../assets/logo.png"
import { FaSearch , FaHome ,FaCartPlus ,FaRegUserCircle , FaBars ,FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)

  return (
    <nav className='bg-gradient-to-r from-purple-100 via-white to-white shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
            {/* Logo */} 
            <div>
                <img src={LogoShopping} alt="" className='h-28 w-auto'/>
            </div>
            {/* Search bar */}
            <div className='flex-1 mx-4'>
                    <div className='relative'>
                        <input type="text" name="" id=""
                        className='w-full bg-gray-200 rounded-full pl-4 pr-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
                        placeholder='Serach for fruits, electronics and more...'
                        />
                        <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg'/>
                    </div>
            </div>
            {/* Menu */}
            <div className='hidden md:flex space-x-6 items-center'>
                <Link className='text-gray-700 hover:text-purple-600'>
                    <FaHome className='text-xl' />
                </Link>
                <Link className='text-gray-700 hover:text-purple-600'>
                <FaCartPlus className='text-xl'/>
                </Link>
                <Link className='text-gray-700 hover:text-purple-600'>
                <FaRegUserCircle className='text-xl'/>
                </Link>

            </div>
            {/* Toggle */}

            <div className='md:hidden'>
                <button className='text-2xl text-purple-600'>
                    {isOpen? <FaTimes/>:<FaBars/>}
                </button>
            </div>

            {/* Mobile-View */}

         {
            isOpen && <div className='md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md'>
                <Link className='block text-gray-800 hover:text-purple-600'>Home</Link>
                <Link className='block text-gray-800 hover:text-purple-600'>Cart</Link>
                <Link className='block text-gray-800 hover:text-purple-600'>User</Link>
            </div>
         }   

        </div>
      </div>
    </nav>
  )
}

export default Navbar
