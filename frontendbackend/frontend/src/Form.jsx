import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  function handleForm(e) {
    e.preventDefault();
    const formData = { UserName: user };
    fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setUser("");
      });
  }

  function handleData() {
    fetch("/api/showdata")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }

  function handleDelete(id){
    fetch(`/api/userdelete/${id}`,{
      method:"DELETE"
    }).then((res)=>{return res.json()}).then((result)=>{
      console.log(result)
      setData(result.data)
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name=""
          id=""
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <button onClick={handleData}>Show User Data</button>
      {data.map((item,index) => (
        <ul>
          <span>{item.UserName}</span>
          <button onClick={()=>{handleDelete(index)}}>Delete</button>
          <Link to={`/update/${index}`}><button>Update</button></Link> 
        </ul>
      ))}
    </div>
  );
};

export default Form;
