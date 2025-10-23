import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

const Slidebar = () => {
  return (
    <div className='bg-gray-800 text-white w-64 min-h-screen p-6 space-y-6'>
      <h1 className='text-2xl font-bold mb-8'>Admin Panel</h1>
      <nav className='space-y-4'>
        <Link to={"/admin/dashboard"} className='block hover:text-green-600'>Dashboard <MdDashboardCustomize className='inline text-blue-400'/></Link>
        <Link to={"/admin/adminproduct"} className='block hover:text-green-600'>Manage Products 
        <MdOutlineProductionQuantityLimits className='inline text-yellow-400' />
        </Link>
        <Link to={"/admin/adminquery"} className='block hover:text-green-600'>Manage Query's
        <MdOutlineQueryStats className='inline text-red-400'/>
        </Link>
        <Link className='block hover:text-red-600'>Exit the store
        <IoMdExit className='inline text-red-900'/>
        </Link>
      </nav>
    </div>
  )
}

export default Slidebar
