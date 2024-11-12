import React, { useState } from "react";
import "./App.css";
import img1 from "./images/uicon.jpg";
import img2 from "./images/email.png";
import img3 from "./images/password.jpg";
const Login = () => {
  // const [action, setAction] = useState("Sign Up");
  const [action, setAction] = useState("Login"); // to login purple ho jayega
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underLine"></div>
          </div>
          <div className="inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={img1} height={20} alt="" />
                <input type="text" placeholder="Name" />
              </div>
            )}

            <div className="input">
              <img src={img2} height={20} alt="" />
              <input type="email" placeholder="Email id" />
            </div>
            <div className="input">
              <img src={img3} height={20} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Lost Password? <span>Click Here</span>
            </div>
          )}

          <div className="submit-container">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
