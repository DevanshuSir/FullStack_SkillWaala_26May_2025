import React from 'react'
import {Link } from "react-router-dom"
import FooterLogo from "../assets/logo.png"
import { FaFacebook ,FaInstagram , FaTwitter , FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-purple-100 via-white to-white mt-16 border-t border-gray-200'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 md:gap-32 text-gray-700'>
        <div>
            <img src={FooterLogo} alt="" className='h-28 w-auto ' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolorum ullam, quidem provident magnam rerum!</p>
        </div>
        <div>
            <h3 className='text-lg font-bold mb-3'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
                <li><Link className='hover:text-purple-500 font-semibold'>Home</Link></li>
                <li><Link className='hover:text-purple-500 font-semibold'>About</Link></li>
                <li><Link className='hover:text-purple-500 font-semibold'>Contact</Link></li>
                <li><Link className='hover:text-purple-500 font-semibold'>T&C</Link></li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-bold mb-3'>Follow Us </h3>
            <div className='flex space-x-2 text-2xl'>
                    <Link className='hover:text-blue-700'>
                <FaFacebook/>
            </Link>
            <Link className='hover:text-red-500'>
            <FaInstagram/>
            </Link>
            <Link className='hover:text-sky-600'>
            <FaTwitter/>
            </Link>
            <Link className='hover:text-green-500'>
            <FaWhatsapp/>
            </Link>
            </div>

        </div>
      </div>
      <div className='text-center text-sm text-gray-700 py-4 border-t border-gray-400'>
        © {new Date().getFullYear()} ShopBag Marketplace Private Limited
      </div>
    </footer>
  )
}

export default Footer
