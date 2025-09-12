import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveFormInfo } from './features/formSlice'

const Form = () => {
  const counterValue =   useSelector((state)=>state.counter.value )
  const dispatch = useDispatch()
  const [form,setForm] = useState({name:"",email:""})

  function handleForm(e){
    e.preventDefault()
    dispatch(saveFormInfo(form))
  }

  function handleChange (e){
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <h1>Form Comp :- {counterValue}</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id=""
        value={form.name}
        onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id=""
        value={form.email}
        onChange={handleChange}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default Form
