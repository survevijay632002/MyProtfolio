import React from "react";
import "./Home.css";
import myPhoto from "../../assets/my-resumeimages.jpg";
import resumePDF from "../../assets/Vijay_Surve_Resume.pdf";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Vijay Surve</span>
        </h1>
        <h2>MERN Stack Developer</h2>
        <p className="text">
          I am a fresher MERN Stack Developer skilled in React, Node.js,
          Express.js, and MongoDB. I love building modern and responsive web
          applications.
        </p>
      </div>

      <div className="home-image">
        <img src={myPhoto} alt="Vijay Surve" />
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          <button className="resume-btn">MY Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
