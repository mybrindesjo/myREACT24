import React from 'react';
import { Link } from 'react-router-dom';

const projectsInfo = [
  { href: "/projects/project1", imgSrc: "./img/stalltid.png", alt: "Project 1" },
  { href: "/projects/project2", imgSrc: "./img/musikfestival.png", alt: "Project 2" }
];

const Projects = () => {
  return (
    <main>
      <div className="project-container">
        <h1>Mina projekt</h1>
        <div className="project-info">
          {projectsInfo.map((project, index) => (
            <Link key={index} to={project.href}>
              <img src={project.imgSrc} alt={project.alt} className="project-img" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;