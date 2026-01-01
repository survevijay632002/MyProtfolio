import React from "react";
import Home from "../Home/Home.jsx";
import Project from "../Project/Project.jsx";
import Contact_me from "../Contact_me/Contact_me.jsx";
import About from "../About/About.jsx";
import Mainpage from "./Mainpage.jsx";

function All_Pages() {
  return (
    <div>
      <Mainpage>
        <Home></Home>

        <About></About>

        <Project></Project>

        <Contact_me></Contact_me>
      </Mainpage>
    </div>
  );
}

export default All_Pages;
