import React, { useState } from "react";
import "./App.css";

function ValidationPreinput() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const preDefine = {
    userName: " mohit123",
    password: "123456",
  };


  const handleSignUp = (e) => {
    e.preventDefault(); 

    
    if (preDefine.userName === userName && preDefine.password === password) {
      // const a = "t";
      // const b = setTimeout(() => {
      //   const c = "welcome";
      //   return c;
      // },1000);
      // setMessage(a + b);
      
      
   setMessage("Login Successful");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="box">
      <form className="form">
        <h1>Sign Up</h1>
        {/* user name */}
        <label>Enter Your Name</label>
        <br />
        <input
          className="input"
          type="text"
          value={userName}
          placeholder="mohit"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Enter your Password</label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          placeholder="Enter the Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* Display the message */}
        <div className="div" style={{ color: "green" }}>
          {message}
        </div>
        <button id="submitt" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default ValidationPreinput;


