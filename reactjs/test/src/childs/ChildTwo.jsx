import React from 'react'
import ChildThree from './ChildThree'

const ChildTwo = (props) => {
  
  return (
    <div>
      <h1>Child_two 🎎</h1>
      <ChildThree child_two={props.child_one}/>
    </div>
  )
}

export default ChildTwo
