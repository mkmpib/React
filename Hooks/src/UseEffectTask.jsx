import React from 'react'
 import { useEffect,useState } from 'react'
const UseEffectTask = () => {
    const [count, setCount] = useState(0)
     const [count1,setCount1]=useState(30)
    useEffect(() => {
        setTimeout(() => {
            setCount(count+1)
        }, 1000)
        setTimeout(() => {
            if (count1 > 0) {
                setCount1(count1-1)
            }

        },1000)
    })
  return (
      <center>
          <h1>Start Timer {count}</h1>

          <h2>timer for 30 secs {count1}</h2>



    </center>
      
    
  )
}

export default UseEffectTask
