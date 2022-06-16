import React from "react";
import "./App.css";
import About from "./Components/About.jsx/About";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Footer/>
  </>)
};

export default App;
