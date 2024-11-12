// import React, { useState } from "react";
// import "./App.css";

// function Validation2Question() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const preDefine = {
//     userName: " mohit123",
//     password: "123456",
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     if (preDefine.userName === userName && preDefine.password === password) {
 

//     //   setMessage("Login Successful");
//         setMessage(
//           setTimeout(() => {
//             return "welcom"
//           }, 1000)
//         )
      
//     } else {
//       setMessage("Invalid username or password");
//     }
//   };

//   return (
//     <div className="box">
//       <form className="form">
//         <h1>Sign Up</h1>
//         {/* user name */}
//         <label>Enter Your Name</label>
//         <br />
//         <input
//           className="input"
//           type="text"
//           value={userName}
//           placeholder="mohit"
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <br />
//         <label>Enter your Password</label>
//         <br />
//         <input
//           className="input"
//           type="password"
//           value={password}
//           placeholder="Enter the Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         {/* Display the message */}
//         <div className="div" style={{ color: "green" }}>
//           {message}
//         </div>
//         <button id="submitt" onClick={handleSignUp}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Validation2Question;

import React, { useState } from "react";
import "./App.css";

function Validation2Question() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const preDefine = {
    userName: "mk", // Removed leading space for accuracy
    password: "1",
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (preDefine.userName === userName && preDefine.password === password) {
      setMessage("Login Successful");

      // Delay showing the "welcome" message by 1 second
      setTimeout(() => {
        setMessage("Welcome"); // Correctly sets the message after delay
      }, 1000);
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

export default Validation2Question;
