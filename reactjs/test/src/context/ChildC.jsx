import React, { useContext } from 'react'
import { data , anotherData } from '../App'


const ChildC = () => {
    const myName = useContext(data)
  return (
    <div>
      
    <data.Consumer>
        {
            (name)=>{
                return(
                    <anotherData.Consumer>
                        {
                            (msg)=>{
                                return(
                                     <h1>Child_C Comp 🧶 {name} {msg}</h1>
                                )
                            }
                        }
                    </anotherData.Consumer>
                    
                )
            }
        }
    </data.Consumer>

        <h3>{myName}</h3>

    </div>
  )
}

export default ChildC
