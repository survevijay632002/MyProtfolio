import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>

      {/* About div */}
      <div className="about-box">
        <p>
          I am <strong>Vijay Sanjay Surve</strong>, a passionate and dedicated
          <strong> MERN Stack Developer (Fresher)</strong>. I have hands-on
          experience in building responsive and scalable web applications using
          React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
        </p>
        <p>
          I have completed a MERN Stack internship and multiple real-world
          projects. Currently, I am pursuing my MCA and actively looking for an
          entry-level opportunity in the IT industry.
        </p>
      </div>

      {/* Education div */}
      <h2 className="div-title">Education</h2>

      <div className="edu-card">
        <h3>MCA (Pursuing)</h3>
        <p>Bharati Vidyapeeth (Deemed to be University), Pune</p>
      </div>

      <div className="edu-card">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>Ganpatrao Arwade College of Commerce, Sangli</p>
        <p>
          <strong>Percentage:</strong> 78.92%
        </p>
        <p>
          <strong>Year:</strong> 2024
        </p>
      </div>

      <div className="edu-card">
        <h3>HSC (12th)</h3>
        <p>Maharashtra State Board</p>
      </div>

      <div className="edu-card">
        <h3>SSC (10th)</h3>
        <p>Maharashtra State Board</p>
      </div>

      {/* Certification div */}
      <h2 className="div-title">Certifications</h2>

      <div className="about-box">
        <ul>
          <li>
            <strong>MERN Stack Full Stack Web Development</strong> – SevenMentor
            Institute, Pune (Aug 2023 – Jul 2024)
          </li>
        </ul>
      </div>

      {/* Achievements div */}
      <h2 className="div-title">Achievements</h2>

      <div className="about-box">
        <ul>
          <li>
            Completed MERN Stack Internship at SevenMentor Pvt. Ltd., Pune
          </li>
          <li>
            Developed multiple full-stack projects using MERN technologies
          </li>
          <li>Hands-on experience with REST APIs and real-time applications</li>
          <li>Strong foundation in React, Node.js, MongoDB, and Express.js</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
