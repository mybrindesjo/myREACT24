import React from 'react';

const SkillsSection = ({ skills }) => (
    <section className="info-container">
        <h2>Kompetenser</h2>
        <ul className="skills">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </section>
);

export default SkillsSection;
