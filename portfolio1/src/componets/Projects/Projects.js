import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="Projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">

        <a
          href="https://github.com/sharmayuvraj14/brain-dose"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <h3>Brain Dose</h3>
            <p>
              A responsive quiz application using React and Firebase. Features flashcards, scoring logic, and result tracking.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/sharmayuvraj14/pcc"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <h3>Instapreps.ai Internship</h3>
            <p>
              Worked on React and Firebase components. Improved responsiveness and added educational features during internship.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/sharmayuvraj14/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              My personal portfolio built using React and CSS, with smooth scroll and fully responsive UI.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/sharmayuvraj14/dento"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <h3>Dento - Dental Care UI</h3>
            <p>
              A responsive landing page for a dental clinic built using HTML, CSS, and Bootstrap.
            </p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Projects;
