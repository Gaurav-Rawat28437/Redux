import React, { useState } from 'react'
import CounterFunctionComponent from './Components/CounterFunctionComponent'
import Counter from './Components/CounterClassBasedComponent'

function App() {
  const [showCounter,setShowCounter]=useState(false)
  return (
    <div>
      <button
        onClick={()=>{
          setShowCounter(!showCounter)
        }}
      >show and hide</button>
      {showCounter && <Counter />}
    </div>
  )
}

export default App
