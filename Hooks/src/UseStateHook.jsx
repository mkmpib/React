import React from "react";
import { useState } from "react";
import "./App.css";
const UseStateHook = () => {
  const [bg, setBg] = useState("green");
  const [btn, setBtn] = useState("Color Change");
  const cc = () => {
    setBg("yellow");
    setBtn("Awesome");
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: bg }}></div>
      <div className="Colors">
        <button className="Red" onClick={cc}>
          {btn}
        </button>
        <button className="Blue" onClick={cc}>
          {btn}
        </button>
        <button className="Yellow" onClick={cc}>
          {btn}
        </button>
        <button className="Orange" onClick={cc}>
          {btn}
        </button>
        <button className="Black" onClick={cc}>
          {btn}
        </button>
      </div>
    </>
  );
};

export default UseStateHook;
