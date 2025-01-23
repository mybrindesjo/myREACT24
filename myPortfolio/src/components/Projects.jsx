import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main>
      <div className="project-container">
        <h1>Mina projekt</h1>
          <div className="project-info">
            <Link to="/project1">
              <img src="./img/stalltid.png" alt="Project 1" className="project-img" />
            </Link>

            <Link to="/project2">
              <img src="./img/musikfestival.png" alt="Project 2" className="project-img" />
            </Link>
          </div>
      </div>
    </main>
  );
}

export default Projects;