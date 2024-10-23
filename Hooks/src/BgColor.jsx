import React from 'react'
import { useState } from 'react'
const BgColor = () => {
    const [bg, setBg] = useState("olive");
    const colorChange = () => {
        setBg("red")
    }
  return (
    <>
      <div className="container" style={{ backgroundColor: bg }}></div>
      <div className="buttons">
        <button onClick={colorChange}>Red</button>
        <button onClick={colorChange => setBg("yellow")}>Yellow</button>
        <button onClick={() => setBg("green")}>Green</button>
        <button onClick={colorChange => setBg("purple")}>Purple</button>
        <button onClick={() => setBg("orange")}>Orange</button>
        <button onClick={() => setBg("blue")}>Blue</button>
      </div>
    </>
  );
}

export default BgColor
