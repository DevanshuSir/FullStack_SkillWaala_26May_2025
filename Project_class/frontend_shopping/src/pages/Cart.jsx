import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaPlus , FaMinus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const Cart = () => {

const navigate = useNavigate()

  return (
    <div className='fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='bg-white w-full max-w-xl p-6 rounded-xl relative overflow-y-auto max-h-[90vh] mx-4'>
        <button
        onClick={()=>{navigate("/")}}
        className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-xl">
            <IoIosCloseCircle/>
        </button>

        <h2 className='text-2xl font-bold text-purple-600 text-center mb-4'>Your Cart 🛍️</h2>
        {
            [1,2,3,4,5].map(()=>(
                  <ul className='divide-y divide-gray-300'>
            <li className='flex items-center gap-5 py-4'>
                <img src="https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/309465_0_stnogk.png" alt="" className='w-14 h-14 object-cover rounded border' />
                <div className='flex-1'>
                    <h3 className='font-semibold text-gray-800'>Apple Watch</h3>
                </div>
                <p className='text-sm font-semibold text-green-600'>$56</p>
                <div className='flex items-center gap-2'>
                    <button
                    className='px-2 py-2 bg-purple-300 rounded hover:bg-purple-500'
                    >
                        <FaMinus/>
                    </button>
                    <span className='px-1'>0</span>
                    <button
                     className='px-2 py-2 bg-purple-300 rounded hover:bg-purple-500'
                    >
                        <FaPlus/>
                    </button>
                </div>
                <MdDeleteSweep className='text-gray-700 hover:text-red-600 text-2xl hover:cursor-pointer'/>
            </li>
        </ul>
            ))
        }

        <div className='mt-5 text-right'>
            <p className='text-lg font-semibold text-gray-700'>Total:- 
                <span className='text-green-500'>$56</span>
                </p>
                <button className='mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800'>Checkout</button>
        </div>
      
      </div>
    </div>
  )
}

export default Cart