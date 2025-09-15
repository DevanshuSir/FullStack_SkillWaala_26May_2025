import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteCartItem } from "../features/cartSlice";
import { Link } from "react-router-dom";




const Cart = () => {
 

 const cartData =  useSelector((state)=>state.cartItem.cart)
 const dispatch = useDispatch()

 
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mt-11">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      
          <div className="space-y-6">
            {cartData.length===0?
            <div className="text-center">
            <p className=" font-bold text-xl text-red-600">Empty Cart ☹
              
            </p>
            <Link className=" text-blue-600 hover:text-blue-950" to={"/product"}>Continue Shopping ..🛒</Link>
            </div>
             : cartData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6 last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-md shadow"
                />
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-blue-600 font-bold text-lg">₹ {item.price}</span>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                        
                        aria-label="Decrement"
                      >
                        -
                      </button>
                      <span className="px-2 font-medium">{item.qunatity}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                       
                        aria-label="Increment"
                      >
                        +
                      </button>
                    </div>
                   
                    <span className="ml-auto text-gray-700 font-semibold">
                      ₹{item.price * item.qunatity}
                    </span>
                     <button onClick={()=>{dispatch(deleteCartItem(item))}}><MdDelete className="text-red-500 text-2xl hover:text-red-700"/></button>
                  </div>
                </div>
              </div>
            ))}
            {
              cartData.length===0?"":<div className="flex justify-end items-center mt-8">
              <span className="text-xl font-bold text-gray-800 mr-2">Total:</span>
              <span className="text-2xl font-bold text-blue-600">₹100000</span>
            </div>
            }
            
          </div>
       
      </div>
    </div>
  );
};

export default Cart;
