import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incremenet } from './features/counterSlice'
import Form from './Form'

const App = () => {

  const counterValue = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Redux Toolkit {counterValue}</h1>
      <button onClick={()=>{dispatch(incremenet())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
       <Form/>
    </div>

   

  )
}

export default App
