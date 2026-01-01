import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Mainpage({ children }) {
  return (
    <>
      <Navbar></Navbar>

      <div>{children}</div>
    </>
  );
}

export default Mainpage;
