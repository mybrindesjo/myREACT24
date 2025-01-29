import React from 'react';

function SkillList({ skills }) {
    return (
        <ul className="skills">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    );
}

export default SkillList;
