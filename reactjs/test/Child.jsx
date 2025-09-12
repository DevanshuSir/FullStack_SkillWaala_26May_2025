import { memo } from "react"
import React  from 'react'

const Child = () => {
    console.log("Child Comp...")
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
