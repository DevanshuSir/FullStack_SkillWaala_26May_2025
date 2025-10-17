import React from 'react'
import Slidebar from './Slidebar'

const AdminDashboard = () => {
  return (
    <div className='flex mt-16'>
        <Slidebar/>
            <div className='flex-1 p-10  min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Admin DashBoard 👤</h1>
                <div className='grid grid-cols-1'>
                    <div className='bg-white p-6 rounded-lg shadow-xl'>
                        <h2 className='text-xl font-semibold text-gray-700'>Total Products</h2>
                        <p className='text-3xl mt-3 font-bold text-green-500'>45</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminDashboard
