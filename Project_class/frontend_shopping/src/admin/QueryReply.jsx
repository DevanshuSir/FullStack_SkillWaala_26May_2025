import React from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

const QueryReply = () => {
  const [query, setQuery] = useState({ to: "", sub: "", body: "" });

  const { id } = useParams();
  const navigate = useNavigate();

  async function queryData() {
    try {
      const response = await fetch(`/api/querysingledata/${id}`);
      const result = await response.json();
      if (response.ok) {
        console.log(result);
        setQuery({ to: result.data.Email });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(()=>{
    queryData();
  },[])

  function handleForm(e){
    e.preventDefault()
    fetch(`/api/mailreply/${id}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(query)
    })
  }

  function handleChange(e){
    setQuery({...query,[e.target.name]:e.target.value})
  }

  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10  min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Reply Query 📮
        </h1>

        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => {
            navigate("/admin/adminquery");
          }}
        >
          Back
        </button>

        <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6">
          <form action="" onSubmit={handleForm}>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              To
            </label>
            <input
              type="text"
              name=""
              value={query.to}
              id=""
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              From
            </label>
            <input
              type="text"
              name=""
              id=""
              value={"dkexpress06@gmail.com"}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              Sub
            </label>
            <input
              type="text"
              name="sub"
              onChange={handleChange}
              id=""
              value={query.sub}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"

            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              Body
            </label>
            <textarea
              name="body"
              onChange={handleChange}
              value={query.body}
              id=""
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>

            <div className="text-right">
              <button className="bg-purple-500 text-white px-5 py-1 rounded hover:bg-purple-700">
                Reply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryReply;
