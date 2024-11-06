import React, { useState } from 'react'
import { useRef } from 'react';
import "./App.css";
function UseRefTask() {
  let inputRef = useRef(null)
  let val = useRef(0);
    const [clcikCount, setClickCount] = useState(0);
    function handle() {
        inputRef.current.value = "4000";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
      inputRef.current.style.backgroundColor = "orange";
    }
    function hide() {
         inputRef.current.style.display = "none";
    }
    function reset() {
      inputRef.current.value = "";
      inputRef.current.style.backgroundColor = "white";
      inputRef.current.style.display = "inline"; // Make input visible again
    }
    function incrementClick() {
          setClickCount((prevCount) => prevCount + 1);
  }
 
  function count() {
    val.current += 1; // Increment val correctly
    alert(`Count with useRef: ${val.current}`);
  }
  return (
    <div className='container5'>
          <h1>UseRef Project</h1>
          <button onClick={handle}>Click</button>
          <button onClick={hide}>Hidee</button>
          <button onClick={reset}>Reset</button>
          <br />

          <input type="text" ref={inputRef} />
          <br />
          <h2>Click any button to change background color</h2>
          <button onClick={()=>{inputRef.current.style.backgroundColor="black"}}>Black</button>
          <button onClick={()=>{inputRef.current.style.backgroundColor="blue"}}>Blue</button>
          <button onClick={()=>{inputRef.current.style.backgroundColor="yellow"}}>Yellow</button>
          <button onClick={()=>{inputRef.current.style.backgroundColor="red"}}>Red</button>
          <button onClick={() => { inputRef.current.style.backgroundColor = "green" }}>Green</button>
          
          <br />
          <h2>Width</h2>
          <button onClick={()=>{inputRef.current.style.width=""}}>Width Default</button>
          <button onClick={()=>{inputRef.current.style.width="25%"}}>Width 25%</button>
          <button onClick={()=>{inputRef.current.style.width="50%"}}>Width 50%</button>
          <button onClick={()=>{inputRef.current.style.width="75%"}}>Width 75%</button>
          <button onClick={() => { inputRef.current.style.width = "100%" }}>100%</button>
          <br />

          <h2>In this you know how much time you have Clicked</h2>
          <button onClick={incrementClick}>Click Me!</button>
      <p>You clicked {clcikCount} times! </p>
    </div>
  )
}

export default UseRefTask
