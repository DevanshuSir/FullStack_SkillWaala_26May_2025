import React from 'react'

const Query = () => {
  return (
    <div className='max-w-7xl mx-auto mt-24 p-6 bg-gray-200 rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold text-purple-500 mb-4 text-center'>Query Form 📄</h2>
        <form action="">
            <label className='block text-gray-700 font-medium mb-1' htmlFor="">Your Name</label>
            <input type="text" name="" id=""
            placeholder='Enter your name ...'
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <label className='block text-gray-700 font-medium mb-1'  htmlFor="">Your Email</label>
            <input type="email" name="" id=""
            placeholder='Enter your email ...'
             className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <label className='block text-gray-700 font-medium mb-1'  htmlFor="">Your Query</label>
            <textarea name="" id=""
            placeholder='Enter your query here ...'
             className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
            ></textarea>
            <button className='w-full bg-purple-500 hover:bg-purple-800 text-white rounded mt-3 py-2 transition-all' >Submit Query</button>
        </form>
    </div>
  )
}

export default Query
