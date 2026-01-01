import "./Project.css";

import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>

      {/* Project 1 */}
      <div className="project-card">
        <h2>Real Estate Application</h2>
        <p className="tech">
          React.js • Node.js • Express.js • MongoDB • Tailwind CSS • Socket.IO
        </p>
        <p>
          A full-stack real estate platform that allows users to browse and list
          properties. Implemented user authentication, property listings, and
          real-time chat using Socket.IO. Designed a responsive and modern UI
          for better user experience.
        </p>
        <a
          href="https://github.com/survevijay632002/realEstate"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h2>Live Chat Application</h2>
        <p className="tech">
          React.js • Node.js • Express.js • MongoDB • Tailwind CSS • Socket.IO
        </p>
        <p>
          Developed a real-time chat application with instant messaging
          functionality. Used Socket.IO for live communication between users.
          Focused on performance optimization and clean UI design.
        </p>
        <a
          href="https://github.com/survevijay632002/Live-ChatApp"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <h2>Task Management Application</h2>
        <p className="tech">React.js • Node.js • Express.js • MongoDB</p>
        <p>
          Built a task management system to create, update, and delete tasks.
          Implemented REST APIs for backend operations. Designed a simple and
          responsive interface for productivity.
        </p>
        <a
          href="https://github.com/survevijay632002/Task-Management-App"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Project 4 */}
      <div className="project-card">
        <h2>Weather App</h2>
        <p className="tech">React.js • JavaScript • Tailwind CSS • API</p>
        <p>
          Created a weather application that fetches real-time data from an API.
          Displays temperature, weather condition, and location details. Fully
          responsive UI for mobile and desktop devices.
        </p>
        <a
          href="https://github.com/survevijay632002/WeatherApp"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>

      {/* Project 5 */}
      <div className="project-card">
        <h2>Food Foundry UI App</h2>
        <p className="tech">React.js • HTML • CSS • JavaScript • Bootstrap</p>
        <p>
          Designed a food ordering UI with attractive layouts and components.
          Implemented responsive design using Bootstrap. Focused on clean UI and
          user-friendly navigation.
        </p>
        <a
          href="https://github.com/survevijay632002/food-fundry"
          target="_blank"
          rel="noreferrer"
        >
          🔗 View on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
