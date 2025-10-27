import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaEye , FaEyeSlash } from "react-icons/fa";
import {toast} from "react-hot-toast"

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [login,setLogin] = useState({loginEmail:"",loginPass:""})

  async function handleForm(e){
    e.preventDefault()
   try {
    const response = await fetch("/api/loginuser",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(login)
    })

    const result = await response.json()
     if(response.ok){
        toast.success(result.message)
        navigate("/ ")
     }else{
      toast.error(result.message)
     }

   } catch (error) {
      toast.error(error)
   }
  }

  function handleChange(e){
    setLogin({...login , [e.target.name]:e.target.value})
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative ">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-xl"
        >
          <IoIosCloseCircle />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-purple-500 text-center">
          Login to Continue..😍
        </h2>
        <form action="" onSubmit={handleForm}>
          <label htmlFor="" className="block text-sm text-gray-700 mb-2">
            Email
          </label>
          <input
            type="text"
            name="loginEmail"
            value={login.loginEmail}
            onChange={handleChange}
            id=""
            className="w-full border border-gray-500 px-4 py-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter your email"
          />
          <label htmlFor="" className="block text-sm text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "password" : "text"}
              name="loginPass"
              value={login.loginPass}
              onChange={handleChange}
              id=""
              className="w-full border border-gray-500 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your password"
            />
            <button
            type="button"
            onClick={()=>{setShowPassword(!showPassword)}}
            className="absolute top-3 right-3 hover:text-green-700">
                 {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </button>
          </div>

          <button className="w-full bg-purple-500 hover:bg-purple-700 text-white py-2 mt-6 font-semibold rounded">
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-5">
          Don't have an account

          <Link to={"/reg"} className="text-green-600 hover:underline"> Register</Link>

        </p>
      </div>
    </div>
  );
};


export default Login;

