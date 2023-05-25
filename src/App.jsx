import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Methodology from "./components/Methodology";
import Classification from "./components/roads/Classification";
import Last from "./components/last/Last";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Methodology></Methodology>
      <Classification></Classification>
      <Last></Last>
    </>
  )
}

export default App
