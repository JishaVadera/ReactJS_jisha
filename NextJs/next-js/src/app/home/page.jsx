"use client";

import React from 'react'
import { useState } from 'react'

const initialValue = 0

const Use_State = () => {
  const [state  , setState]  = useState(initialValue)
  


  const handleIncrement = () => {
    setState(state => state + 1)
   
  }

  const handleDecrement = () => {
    setState(state - 1)
  }
  const handleReset = () => {
    setState(initialValue)
  }

  return (
    <div>
      <h1 className='text-center text-4xl text-white bg-green-500 p-4 font-bold'>React useState Hook</h1>

      <span>
        useStateHook Value :  {state}
      </span>


      <button className='bg-purple-500 p-2 mx-4 text-white ' onClick={handleIncrement}>Increment</button>
      <button className='bg-purple-500 p-2 mx-4 text-white ' onClick={handleDecrement}>Decrement</button>
      <button className='bg-purple-500 p-2 mx-4 text-white ' onClick={handleReset}>Reset</button>


    
    </div>
  )
}

export default Use_State
