import React, { useState } from "react";
import "./App.css";

const BallMovement = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 }); // Initial position

  const moveUp = () => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      top: prevPosition.top - 50,
    }));
  };

  const moveDown = () => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      top: prevPosition.top + 50,
    }));
  };

  function moveLeft()  {
    setPosition((prevPosition) => ({
      ...prevPosition,
      left: prevPosition.left - 50,
    }));
  };

  const moveRight = () => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      left: prevPosition.left + 50,
    }));
  };

  return (
    <div className="container">
      <div
        className="ball"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          position: "absolute",
        }}
      >
        <button onClick={moveUp} className="move-button">
          Up
        </button>
        <button onClick={moveDown} className="move-button">
          Down
        </button>
        <button onClick={moveLeft} className="move-button">
          Left
        </button>
        <button onClick={moveRight} className="move-button">
          Right
        </button>
      </div>
    </div>
  );
};

export default BallMovement;
