import React from 'react'
import './Counter.css'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(count)


    function handleIncCount (){
        setCount(count+1)
        
    }
    

    function handleDecCount (){
        setCount(count-1)
    }

  return (
    <div className='count'>
        <div>Count: {count}</div>

        <div>Count: {count}</div>


        <div>Count: {count}</div>

        <div className='button'>
            <button onClick={handleIncCount}>Increase</button>
            <button onClick={handleDecCount}>Decrease</button>
        </div>

    </div>
    
  )
}

export default Counter