import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    useEffect(()=>{
        console.log("Component mounted......")

    }, [])

  return (
    <div className=''>
        <div cla>
            <h1 className='font-bold text-3xl  '>Count: {count}</h1>
            <h1 className='font-bold text-3xl  '>Count1: {count1}</h1>
        </div>

        <div className='mt-5'>
            <button onClick={()=>setCount(count+1)} className='bg-red-600 mr-5 border border-red-800 rounded-lg p-2 font-bold'>Increment</button>
            <button onClick={()=>setCount1(count1+1)} className='bg-red-600 mr-5 border border-red-800 rounded-lg p-2 font-bold'>Increment</button>
        </div>
    </div>
  )
}

export default Counter