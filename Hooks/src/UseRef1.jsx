import React from "react";
import { useRef } from "react";
const UseRef1 = () => {
  let ref = useRef(null);
  function handleclick() {
    ref.current = ref.current + 1;
    alert("you clicked" + ref.current + "times");
  }
  return (
    <div>
      <center>
        <button onClick={handleclick}>clickme</button>
      </center>
    </div>
  );
};

export default UseRef1;
