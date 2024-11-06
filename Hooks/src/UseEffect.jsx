import React from 'react'
import { useEffect,useState } from 'react'
const UseEffect = () => {
 
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    },[count])
  return (
      <>
          <center>
              <h1>UseEfeect Hook</h1>
              {count}
              <button onClick={()=>{setCount(count+1)}}>Click Me</button>



          </center>
          
      </>
  )
}

export default UseEffect
