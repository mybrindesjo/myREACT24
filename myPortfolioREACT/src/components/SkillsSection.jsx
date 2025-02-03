import React from 'react';

const Skillsdiv  = ({ skills }) => (
    <div  className="info-container">
        <h2>Kompetenser</h2>
        <ul className="skills">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div >
);

export default Skillsdiv ;
