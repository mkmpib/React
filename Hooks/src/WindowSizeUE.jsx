import React ,{useState,useEffect} from 'react'

const WindowSizeUE = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        console.log("Event Listener Added");
        window.addEventListener("resize", handleResize);
        
        return () => {
            console.log("Event Listenter Remove")
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    //it will run only on the first render
  return (
    <div>
      <h1>Window width:{windowWidth}px</h1>
    </div>
  )
}

export default WindowSizeUE

// stict mode enable hoga jis karn 2 baar calta hai code ya rendering
