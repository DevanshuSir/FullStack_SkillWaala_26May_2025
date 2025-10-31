import React from "react";
import Slidebar from "./Slidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const AdminQuery = () => {
  const [query, setQuery] = useState([]);

  async function allQuery() {
    try {
      const response = await fetch("/api/userallquery");
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setQuery(result.data);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    allQuery();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await fetch(`/api/querydelete/${id}`, {
        method: "Delete",
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        allQuery()
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10  min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Query Management 📧
        </h1>
        <div className="">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">S.no</th>
                <th className="px-6 py-3">User Name</th>
                <th className="px-6 py-3">Query</th>
                <th className="px-6 py-3">Email-Id</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action-1</th>
                <th className="px-6 py-3">Action-2</th>
              </tr>
            </thead>
            {query.map((item, index) => (
              <tbody key={index}>
                <tr className="bg-white border-b border-gray-300 text-gray-800">
                  <td className="px-6 py-3">{index + 1}</td>
                  <td className="px-6 py-3">{item.Name}</td>
                  <td className="px-6 py-3">{item.Query}</td>
                  <td className="px-6 py-3">{item.Email}</td>
                  <td className="px-6 py-3">{item.queryStatus}</td>
                  <td className="px-6 py-3">
                    <Link to={`/admin/queryreply/${item._id}`}>
                      <button
                        className="text-xs bg-green-500
                            hover:bg-green-800 text-white px-3 py-2 rounded"
                      >
                        Reply
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                      className="text-xs bg-red-500 
                            hover:bg-red-800 text-white px-3 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminQuery;
