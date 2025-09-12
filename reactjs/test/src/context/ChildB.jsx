import React, { useContext } from 'react'
import ChildC from './ChildC'
import { data , anotherData } from '../App'

// useContext hook
const ChildB = () => {

   const user = useContext(data)
   const greeting = useContext(anotherData)

  return (
    <div>
      <h1>Child_B Comp 🎨 {user} </h1>
      <h2>{greeting}</h2>
      <ChildC/>
    </div>
  )
}

export default ChildB
