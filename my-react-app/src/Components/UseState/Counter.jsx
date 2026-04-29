import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount]= useState(0)

    const add =()=> {
        setCount(count+1)
    };
    const reset =()=> {
        setCount(0)
    };
    const minus =()=> {
        setCount(count-1)
    };
  return (
    <div>
      <h1>Current Count: {count}</h1>
        <button onClick={add}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={minus}>-</button>
    
    </div>
  )
}

export default Counter
