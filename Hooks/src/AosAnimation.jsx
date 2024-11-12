import React, { useEffect } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";

const AosAnimation = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <>
      <div data-aos="fade-up"></div>
      <div data-aos="fade-up"></div>
      <div data-aos="fade-up"></div>
      <div data-aos="fade-up"></div>
      <div data-aos="fade-up"></div>
      <h1>hello my self mohit kumar</h1>
    </>
  )
}

export default AosAnimation
