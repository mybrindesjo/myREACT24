import React from 'react';

const ProjectCard = ({ title, description, images }) => (
    <div className="project-card">
        <div className="project-header">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        {images && images.map((image, index) => (
            <img key={index} className="project-img" src={image.src} alt={image.alt} />
        ))}
    </div>
);

export default ProjectCard;
