import React from 'react'
import Slidebar from './Slidebar'
import { useNavigate } from 'react-router-dom'

const QueryReply = () => {

    const navigate =  useNavigate()

  return (
    <div className='flex mt-16'>
        <Slidebar/>
            <div className='flex-1 p-10  min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Reply Query 📮</h1>

                <button className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-300' onClick={()=>{navigate("/admin/adminquery")}}>Back</button>

                <div className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6'>
                    <form action="">
                        <label className='block text-gray-700 font-medium mb-1' htmlFor="">To</label>
                        <input type="text" name="" id=""
                        className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
                        />
                        <label className='block text-gray-700 font-medium mb-1' htmlFor="">From</label>
                        <input type="text" name="" id=""
                        className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
                        />
                        <label className='block text-gray-700 font-medium mb-1' htmlFor="">Sub</label>
                        <input type="text" name="" id=""
                        className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
                        />
                        <label className='block text-gray-700 font-medium mb-1' htmlFor="">Body</label>
                        <textarea name="" id=""
                        className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
                        ></textarea>

                        <div className='text-right'>
                            <button
                        className='bg-purple-500 text-white px-5 py-1 rounded hover:bg-purple-700'
                        >Reply</button>
                        </div>
                        

                    </form>
                </div>
               
            </div>
    </div>
  )
}

export default QueryReply
