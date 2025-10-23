import React from 'react'
import Slidebar from './Slidebar'
import { useNavigate } from 'react-router-dom'

const EditProducts = () => {
    const navigate = useNavigate()
  return (
    <div className='flex mt-16'>
        <Slidebar/>
            <div className='flex-1 p-10  min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Update Product 🛍</h1>
              <button className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-300' onClick={()=>{navigate("/admin/adminproduct")}}>Back</button>
              <form action=""
              className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6'
              >
                <label className='block text-gray-700 font-medium mb-1' htmlFor="">Product Name</label>
                <input type="text" name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600' />

                <label htmlFor="" className='block text-gray-700 font-medium mb-1'>Price ₹</label>
                <input type="number" name="" id="" 
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600'
                />

                <label htmlFor="" className='block text-gray-700 font-medium mb-1'>Categorys</label>
                <select name="" id=""
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600'
                >
                    <option value="">---Select---</option>
                    <option value="">Cafe</option>
                    <option value="">Home</option>
                    <option value="">Toys</option>
                    <option value="">Freash</option>
                    <option value="">Electronics</option>
                    <option value="">Mobile</option>
                    <option value="">Beauty</option>
                </select>

                <label htmlFor="" className='block text-gray-700 font-medium mb-1'>Status</label>
                <select name="" id=""
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600'
                >
                    <option value="">---Select---</option>
                    <option value="">In-Stock</option>
                    <option value="">Out-Of-Stock</option>
                </select>
              
                <div className='text-right'>
                     <button className='bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700'>Save Changes</button>
                </div>
               
              </form>
            </div>
    </div>
  )
}

export default EditProducts