import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Bikes from "./Bikes";
import Navbar from "./Navbar";
import Login from "./Login";

const App = () => {
  // function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Bikes" element={<Bikes></Bikes>} />
        <Route path="/Services" element={<Services></Services>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Login" element={<Login></Login>} />
      </Routes>
    </>
  );
};

export default App;
