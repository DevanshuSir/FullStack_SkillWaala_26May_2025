import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {id} = useParams()
    const navigate = useNavigate()


    const [user,setUser ] = useState("")

    useEffect(()=>{
        fetch(`/api/updatedata/${id}`).then((res)=>{return res.json()}).then((result)=>{
        console.log(result)
        setUser(result.data.UserName)
    })

    },[])

    
    function handleForm(e){
        e.preventDefault()

        const formData = {userName:user}

        fetch(`/api/newupdatevalue/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }).then((res)=>{return res.json()}).then((result)=>{
            if(result==="Successfully Update.."){
                navigate("/")
            }
        })
    }

  return (
    <div>
      <h1>Update User 🧨</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">User</label>
        <input type="text" name="" id="" value={user} onChange={(e)=>{setUser(e.target.value)}} />
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default Update
