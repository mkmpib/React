import { useState } from 'react'
import './App.css'
import viteLogo from '/vite.svg'

// ui updation ko react handle karta hai

function App() {
 // counter=variable name,setCounter=method or function h
  const [counter,setCounter]=useState(15) //true, false,empty,'mohit','rohit//hooks
  // let counter = 5

  const addValue = () => {
    //console.log("value added", Math.random());// for cheaking
    // console.log("clicked", counter);
    //  counter = counter + 1 // isko clane ke liye counteko let me krna pdega
    // setCounter(counter)
    if (counter == 20) {
      setCounter(counter=20)
    } else {
      setCounter(counter+1)
    }
    
  
   
  }
   // for removing element
    const removeValue = () => {
      // console.log("clicked", counter);
      if (counter == 0) {
        setCounter(counter = 0)
      } else {
        setCounter(counter - 1)
      }
    }
  
  
  return (
    <>
      <div className="cont">
   <h1>mohit kumar first project</h1>
      <h2>Counter value:{counter}</h2>

        <button onClick={addValue}
        >Add Value{counter}</button>
      <br />
        <button onClick={removeValue}>Remove Value{counter}</button> 
        <p>footer{counter}</p>
        </div>
      </>
  )
}

export default App
