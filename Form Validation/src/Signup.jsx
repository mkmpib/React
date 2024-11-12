import React, { useState } from "react";
import "./App.css";

function Signup() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = () => {
    if (Validate()) {
      setMessage("Signup successful!");
    } else {
      setMessage("Signup failed. Please fix the errors.");
    }
  };

  const Validate = () => {
    let isValid = true;

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  return (
    <div className="box">
      <input
        type="password"
        value={password}
        placeholder="Enter the Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ color: "red" }}>{passwordError}</div>

      <div style={{ color: "green" }}>{message}</div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default Signup;
