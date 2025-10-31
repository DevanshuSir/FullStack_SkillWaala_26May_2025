import React, { useState } from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddProducts = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ Pname: "", Price: "", Cat: "" });

  const [Pimage, setPImage] = useState("");

  async function handleForm(e) {
    e.preventDefault();
    const formallData = new FormData();
    formallData.append("Pname",product.Pname)
    formallData.append("Price",product.Price)
    formallData.append("Cat",product.Cat)
    formallData.append("image",Pimage)
    
    try {
      const response = await fetch("/api/addadminproduct", {
        method: "POST",
        body:formallData
      });
      const record = await response.json();
      if (response.ok) {
        toast.success(record.message);
        navigate("/admin/adminproduct");
      } else {
        toast.error(record.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10  min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Add Products 🛍
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
          action=""
          enctype="multipart/form-data"
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6"
          onSubmit={handleForm}
        >
          <label className="block text-gray-700 font-medium mb-1" htmlFor="">
            Product Name
          </label>
          <input
            type="text"
            value={product.Pname}
            onChange={handleChange}
            name="Pname"
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Price ₹
          </label>
          <input
            type="number"
            value={product.Price}
            onChange={handleChange}
            name="Price"
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Categorys
          </label>
          <select
            value={product.Cat}
            onChange={handleChange}
            name="Cat"
            id=""
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

          <label className="block text-gray-700 font-medium mb-1" htmlFor="">
            Product Image
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            type="file"
            name="image"
         
            onChange={(e)=>{setPImage(e.target.files[0])}}
            id=""
          />
          <div className="text-right">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
