import React, { useEffect, useState } from 'react'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import toast from 'react-hot-toast';

const AdminProducts = () => {


  const [product,setProduct] = useState([])

  async function getAllProducts(){
    try {
      const response = await fetch("/api/getproduct")
      const record = await response.json()

      if(response.ok){
        setProduct(record.data)
      }else{
        toast.error(record.massage)
      }
      
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  async function handleDelete(id){
    try {
     const response = await fetch(`/api/productdelete/${id}`,{
        method:"DELETE"
      })
      const result = await response.json()
      if(response.ok){
          toast.success(result.message)
          getAllProducts()
      }else{
        toast.error(result.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  

  return (
    <div className='flex mt-16'>
        <Slidebar/>
            <div className='flex-1 p-10  min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Manage Products 🛒</h1>
                <Link to={"/admin/add-products"}>
                   <button className='flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 '>Add Products</button>
                </Link>
             
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
          {product.map((item,index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4 hover:shadow-xl ">
              <img
                src={`/uploads/${item.productImage}`}
                alt=""
                className="w-full h-40 object-contain rounded-md mb-4 border"
              />
              <h3 className="text-xl font-semibold text-gray-700">{item.productName}</h3>
              <p className="text-sm text-gray-600">Category :- {item.productCategory
}</p>
              <p className="text-green-600 font-bold mt-1">{item.productPrice} ₹</p>
              {
                item.productStatus === "In-Stock" ?  <p className="text-blue-700 font-semibold mt-1">{item.productStatus}</p>:<p className="text-red-500 font-semibold mt-1">{item.productStatus}</p>
              }
             
              <div className="flex flex-col sm:flex-row justify-between mt-4">
                <Link to={`/admin/edit-product/${item._id}`} className="flex items-center text-xl gap-3 text-blue-500 hover:text-blue-800">
                  <FaEdit />
                </Link>
                <Link onClick={()=>{handleDelete(item._id)}} className="flex items-center text-xl gap-3 text-red-500 hover:text-red-800">
                  <AiFillDelete />
                </Link>
              </div>
            </div>
          ))}
        </div>
           
            </div>
    </div>
  )
}

export default AdminProducts
