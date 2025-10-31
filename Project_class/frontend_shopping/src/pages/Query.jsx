import React, { useState } from "react";
import {toast} from "react-hot-toast"

const Query = () => {
  const [query, setQuery] = useState({
    userName: "",
    userEmail: "",
    userQuery: "",
  });

  async function handleForm(e) {
    try {
        e.preventDefault();
    const response = await fetch("/api/userquery",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(query)
    })
    console.log(response)
    const result = await response.json()

    if(response.ok){
      toast.success(result.message)
      setQuery({
    userName: "",
    userEmail: "",
    userQuery: "",
  })
    }else{
      toast.error(result.message)
    }
    } catch (error) {
      toast.error(error)
    }
  

  }

  function handleChange(e){
    setQuery({...query,[e.target.name]:e.target.value})
  }

  return (
    <div className="max-w-7xl mx-auto mt-24 p-6 bg-gray-200 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-purple-500 mb-4 text-center">
        Query Form 📄
      </h2>
      <form action="" onSubmit={handleForm}>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Your Name
        </label>
        <input
          type="text"
          name="userName"
          value={query.userName}
          onChange={handleChange}
          id=""
          placeholder="Enter your name ..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Your Email
        </label>
        <input
          type="email"
          name="userEmail"
          value={query.userEmail}
          onChange={handleChange}
          id=""
          placeholder="Enter your email ..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <label className="block text-gray-700 font-medium mb-1" htmlFor="">
          Your Query
        </label>
        <textarea
          name="userQuery"
          value={query.userQuery}
          onChange={handleChange}
          id=""
          placeholder="Enter your query here ..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button className="w-full bg-purple-500 hover:bg-purple-800 text-white rounded mt-3 py-2 transition-all">
          Submit Query
        </button>
      </form>
    </div>
  );
};

export default Query;