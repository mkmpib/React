import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  const bgChanger = () => {
    setColor('red');
  }
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} >
        {/* psition vala div */}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       {/* jis div ke ander button hai */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={bgChanger} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={()=>setColor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor('aquamarine')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"Aquamarine"}}>Aquamarine</button>
            <button onClick={()=>setColor("BlueViolet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"BlueViolet"}}>BlueViolet</button>
            <button onClick={()=>setColor("Chartreuse")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"Chartreuse"}}>Chartreuse</button>
  </div>
</div>
    </div>
     
    </>
  )
}

export default App
