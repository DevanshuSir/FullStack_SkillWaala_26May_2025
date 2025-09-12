import React from 'react'
import ChildTwo from './ChildTwo'

const ChildOne = (props) => {

  return (
    <div>
        <h1>Child_one 🎍</h1>
        <ChildTwo child_one={props.user}/>
      
    </div>
  )
}

export default ChildOne
