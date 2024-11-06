import React from 'react';
import { useRef } from 'react';

function UseRef() {
    let inputref = useRef(null)
    function handlesubmit() { 
        inputref.current.value = "7000"
        inputref.current.focus()
        inputref.current.style.backgroundColor="red"
            inputref.current.style.color="white"
    }
  return (
    <div>
          <h1>UseRef Project</h1>
          <input type="text" ref={inputref}></input>
          <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default UseRef;
