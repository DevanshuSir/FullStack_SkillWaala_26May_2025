import React, { useCallback, useMemo, useState } from 'react'
import Child from '../Child'

const App = () => {

  const [numInc,setNumInc] = useState(0)
  const [numDec,setNumDec] = useState(100)

  function handleInc(){
    setNumInc(numInc+1)
  }

  function handleDec(){
    setNumDec(numDec-1)
  }



  const memoValue = useMemo(  function (){
    console.log("MultiValue Function ... ")
    return numInc*2
  },[numInc])


 const memoFun =  useCallback(  function (){
    console.log("Some Task test...")
  },[numDec])



  return (
    <div>
      <h1>UseMemo Hook</h1>
    <Child testfun={memoFun}/>
    <h2>{numInc} - {memoValue}</h2>
    <button onClick={handleInc}>Increment</button>
    <h3>{numDec}</h3>
    <button onClick={handleDec}>Decrement</button>

    </div>
  )
}

export default App
