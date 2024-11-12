import React from 'react'

import "./App.css"
import UseStateHook from './UseStateHook'
import BgColor from './BgColor'
//  import UseRef from './UseRef'
import UseRefTask from './UseRefTask'
import UseRef1 from './UseRef1'
import UseEffect from './UseEffect'
import UseEffectTask from './UseEffectTask'
import AosAnimation from './AosAnimation'
import FatchApi from './FatchApi'
import BallMovement from './BallMovement'
import WindowSizeUE from './WindowSizeUE'
import UseReducer from './UseReducer'
import MyContext from './MyContext'
import ComponentA from './ComponentA'
import { useState } from "react"



function App() {
  const [user, setUser] = useState("Mohit kumar");

  return (
    <>
      {/* <UseStateHook/> */}
      {/* <BgColor/> */}
      {/* <UseRef/> */}
      {/* 
      <UseRefTask />
      <UseRef1></UseRef1> */}

      {/* <UseEffect/> */}
      {/* <UseEffectTask/> */}

      {/* <AosAnimation/> */}

      {/* <FatchApi/> */}

      {/* <BallMovement/> */}

      {/* <UseReducer/> */}

      {/* <WindowSizeUE/> */}

      {/* Use context hook --> */}
        
      <MyContext.Provider value={user}>
        <h1>{`Hello${user}`}</h1>
        <ComponentA/>
   </MyContext.Provider>
    </>
  );
}

export default App
