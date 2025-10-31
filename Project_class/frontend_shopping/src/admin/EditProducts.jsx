import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [edit, setEdit] = useState({});


  async function editvalueData() {
    try {
      const response = await fetch(`/api/editvaluedata/${id}`);
      const result = await response.json();
      if (response.ok) {
        setEdit(result.data);
        console.log(result)
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(()=>{
    editvalueData()
  },[])

  async function handleForm(e){
    e.preventDefault()

    try {
        const formData = {
      Pname:edit.productName,
      Pprice:edit.productPrice,
      Cat:edit.productCategory,
      Pstatus:edit.productStatus
    }

    const response = await fetch(`/api/productupdate/${id}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    })
    const record = await response.json()
    if(response.ok){
      toast.success(record.message)
      navigate("/admin/adminproduct")
    }else{
      toast.error(record.message)
    }
    } catch (error) {
      toast.error(error)
    }

  
  }

  function handleChange(e) {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  }

 

  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10  min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Update Product 🛍
        </h1>
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => {
            navigate("/admin/adminproduct");
          }}
        >
          Back
        </button>
        <form
        onSubmit={handleForm}
          action=""
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6"
        >
          <label className="block text-gray-700 font-medium mb-1" htmlFor="">
            Product Name
          </label>
          <input
          name="productName"
            value={edit.productName}
            onChange={handleChange}
            type="text"
            
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Price ₹
          </label>
          <input
            type="number"
            name="productPrice"
            value={edit.productPrice}
            onChange={handleChange}
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Categorys
          </label>
          <select
            name="productCategory"
            id=""
            value={edit.productCategory}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="">---Select---</option>
            <option value="cafe">Cafe</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
            <option value="freash">Freash</option>
            <option value="electronics">Electronics</option>
            <option value="mobile">Mobile</option>
            <option value="beauty">Beauty</option>
          </select>

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Status
          </label>
          <select
          value={edit.productStatus}
            name="productStatus"
            id=""
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="">---Select---</option>
            <option value="In-Stock">In-Stock</option>
            <option value="Out-Of-Stock">Out-Of-Stock</option>
          </select>

          <div className="text-right">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
