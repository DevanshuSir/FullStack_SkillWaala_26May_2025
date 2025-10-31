import React from 'react'
import Category from '../pages/Category'
import { useEffect } from 'react'
import {toast} from "react-hot-toast"
import { useState } from 'react'

const Product = () => {

  const [product,setProduct] = useState([])

  async function productData(){
    try {
       const response = await fetch("/api/userproducts")
   const record = await response.json()
   setProduct(record.data)
    } catch (error) {
      toast.error(error)
    }
  
  }

  useEffect(()=>{
    productData()
  },[])

  return (
    <div className='max-w-7xl mx-auto py-10 px-6'>
        <Category/>
        <h2 className='text-2xl font-semibold text-gray-700 mb-6'>Products 🔥</h2>
        <div className='grid gird-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>

            {
                product.map((item,index)=>(
                       <div key={index} className='bg-gray-100 shadow-sm rounded-lg p-4 hover:shadow-xl transition'>
                    <img src={`/uploads/${item.productImage}`} alt="" 
                    className='w-full h-32 object-contain rounded'
                    />
                    <h3 className='mt-2 font-medium text-gray-700'>{item.productName}</h3>
                    <p className='mt-1 font-normal text-gray-500'>{item.productCategory}</p>
                    <p className='text-green-600 font-bold'>{item.productPrice} ₹</p>
                    <button className='w-full bg-purple-500 text-white mt-2 py-1 rounded hover:bg-purple-800'>Add To Cart</button>
            </div>
                ))
            }
         
        </div>
    </div>
  )
}

export default Product
