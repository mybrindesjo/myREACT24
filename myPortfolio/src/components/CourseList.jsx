import React from 'react';

function CourseList({ courses }) {
    return (
        <ul>
            {courses.map((course, index) => (
                <li key={index}>{course}</li>
            ))}
        </ul>
        
    );
}

export default CourseList;
