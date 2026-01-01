import React from "react";
import "./app.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact_me from "./pages/Contact_me/Contact_me.jsx";
import Project from "./pages/Project/Project.jsx";
import "./App.css";

import { Outlet } from "react-router-dom";
import All_Pages from "./pages/mainpages/All_Pages.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar />
        <div>
          <Outlet />
        </div> */}
        <Routes>
          <Route path="/" element={<All_Pages />} />
          {/* <Route element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact_me />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
