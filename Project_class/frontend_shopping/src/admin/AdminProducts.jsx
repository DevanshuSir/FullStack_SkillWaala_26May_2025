import React from 'react'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'

const AdminProducts = () => {
  return (
    <div className='flex mt-16'>
        <Slidebar/>
            <div className='flex-1 p-10  min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Manage Products 🛒</h1>
                <Link to={"/admin/add-products"}>
                   <button className='flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 '>Add Products</button>
                </Link>
             
           
            </div>
    </div>
  )
}

export default AdminProducts
