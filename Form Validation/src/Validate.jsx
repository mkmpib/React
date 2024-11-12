import React,{useState} from "react";
import './App.css'

function Signup() {
     const [name, setName] = useState("");
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    //Error hook
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [passwordError, setPasswordError] = useState('');
    const [rPasswordError, setRPasswordError] = useState('');


    const handleSignUp = (e) => {
        e.preventDefault();
        let isValid = true;
        //name validation
        const alpha = /^[a-zA-Z]*$/;//regex pattern
        if (name == "") {
            setNameError("Please enter your name");
            isValid = false;
       
        } else if ( !alpha.test(name)) {
            setNameError("Please enter a valid name");
            isValid = false;
        } else {
            setNameError("");
        }


        // email validation 
         const emailRegex = /^[a-zA-Z0-9.-_]+@[a-z]*$/
        if (email == '') {
           
            setEmailError('Plese Enter the email')
            isValid = false;
        } else if (emailRegex.test(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
        } else {
            setEmailError('')
        }
         //number validation
        if (number == '') {
            setNumberError('Please enter the number')
            isValid = false;
        } else if (number.length !== 10) {
            setNumberError("Number must be at least 10 characters long");
        } else {
            setNumberError('');
        }

        //password validation
        if (!password) {
            setPasswordError('password is require');
            isValid = false;

        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            isValid = false;
        } else {
            setPasswordError('');
        }


        // confirm password validation 
        if (!rPassword) {
            setRPasswordError('Confirm the password')
            isValid = false;
        } else if (rPassword !== password) {
            setRPasswordError('Password does not match')
            isValid = false;
        } else {
            setRPasswordError('');
        }
       
        
        // final check 
        if (isValid) {
            setMessage('Signup SuccessFully');
        } else {
            setMessage('Signup Failed');
        }
    };

    

        return (
        
            <div className="box">
                <form className="form">
                <h1>Sign Up</h1>
                {/* user name */}
                <label >Enter Your Name</label><br></br>
                <input className="input" type="text" value={name} placeholder="mohit" onChange={(e) => setName(e.target.value)} />
                <div className="div" style={{ color: 'red' }} >{nameError}</div>

                {/* emailid */}
                 <label >Enter Your Email</label><br></br>
                <input className="input" type="email" value={email} placeholder="mkm12@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <div className="div" style={{ color: 'red' }} >{emailError}</div>
                  {/* number */}
                 <label >Enter your Mobile Number</label><br></br>
                <input className="input" type="number" value={number} placeholder="1234567890" onChange={(e) => setNumber(e.target.value)} />
                <div className="div" style={{ color: 'red' }} >{numberError}</div>
                {/* password */}
                 <label >Enter your Email Password</label><br></br>
                <input className="input" type="password" value={password} placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} />
                <div className="div" style={{ color: 'red' }} >{passwordError}</div>
                {/* recheak password */}
                 <label >Confirm Your Password</label><br></br>
                <input className="input" type="Password" value={rPassword} placeholder="Confirm the password" onChange={(e) => setRPassword(e.target.value)} />
                <div className="div" style={{color:'red'}}>{rPasswordError}</div>
              
                {/* submit */}
                <div className="div" style={{ color: 'green' }} >{message}</div>
                    <button id="submitt" onClick={handleSignUp} >SignUp </button>
                    </form>
            </div>
        )
    }

    export default Signup;
