import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Identification from "./pages/Identification";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/identification&development" element={<Identification />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
