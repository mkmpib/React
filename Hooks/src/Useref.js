import React from 'react'
import { useRef } from 'react'
const Useref = () => {
    let ref = useRef(null)
    function handleclick() { 
        ref.current = ref.current + 1
        alert("you clicked"+ref.current+"times")
    }
  return (
      <div>
          <button onClick={handleclick}>clickme</button>
      
    </div>
  )
}

export default Useref
