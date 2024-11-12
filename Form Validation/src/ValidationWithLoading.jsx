import React, { useState } from "react";
import "./App.css"; // Assume you have appropriate CSS for the loading bar

function ValidationWithLoading() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const preDefine = {
    userName: "m",
    password: "1",
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    if (preDefine.userName === userName && preDefine.password === password) {
      setLoading(true); // Start loading

      // Simulate an async operation (e.g., server validation)
      setTimeout(() => {
        setLoading(false); // End loading
        setMessage("Login Successful! Welcome");
      }, 2000); // 2 seconds delay to simulate server response
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="box">
      <form className="form">
        <h1>Sign Up</h1>
        {/* User name input */}
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

        {/* Loading bar */}
        {loading && (
          <div className="loading-bar">
            <div className="loading-bar-progress"></div>
          </div>
        )}

        {/* Display the message */}
        <div className="div" style={{ color: "green" }}>
          {message}
        </div>
        <button id="submitt" onClick={handleSignUp} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default ValidationWithLoading;
