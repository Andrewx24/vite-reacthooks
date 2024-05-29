import React from 'react'
import { useState } from 'react'

const Button = () => {
const [count, setCount] = useState(0)

 
  return (
    <div>


        <h1> {count} </h1>
        <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
        <button  className= 'btn' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Button