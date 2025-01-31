import React from 'react';

const ProjectSection = ({ title, projects }) => (
    <div  className="project-card">
        <div className="project-header">
            <h2>{title}</h2>
        </div>
        {projects.map((project, index) => (
            <div key={index} className="project">
                <div className="row">
                    <h3>{project.title}</h3>
                    <button className="toggle-btn">+</button>
                </div>
                <div className="project-details" style={{ display: 'none' }}>
                    <div className="media-wrap">
                        <p>{project.description}</p>
                        <button className="project-btn">
                            <a href={project.link} target="_blank">Se prototypen här</a>
                        </button>
                        {project.images && project.images.map((image, index) => (
                            <img key={index} className="project-img" src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default ProjectSection;
