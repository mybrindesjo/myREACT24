import React from 'react';

function ExperienceCard({ title, description }) {
    return (
        <article className="experience-card">
            <h3>{title}</h3>
            <div className="description">
                <p>{description}</p>
            </div>
        </article>
    );
}

export default ExperienceCard;
