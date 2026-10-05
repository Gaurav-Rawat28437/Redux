import React, { useEffect, useState } from 'react'

function CounterFunctionComponent() {
    const[Counter,setCounter]=useState(0)

    useEffect(()=>{
      console.log("Counter Mounted")

      return()=>{
        console.log("Counter Unmounter")
      }

    },[Counter])

  return (
    <div>
      <h1>Counter is {Counter}</h1>
      <div className='flex gap-5'>
          <button
            className="border-1"
            onClick={()=>{
                setCounter(Counter+1)
            }}
          >
            increament
          </button>

          <button
            className="border-1"
            onClick={()=>{
              setCounter(0)
            }}
          >
            reset
          </button>

          <button
            className="border-1"
            onClick={()=>{
              setCounter(Counter-1)
            }}
            >
            decrement
          </button>
      </div>

    </div>
  )
}

export default CounterFunctionComponent
