import React from 'react';
import '../css/Education.css'

const Education = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="education-item">
                <h3>University Name</h3>
                <p>Degree: Bachelor of Science in Computer Science</p>
                <p>Year: 2020 - Present</p>
            </div>
            <div className="education-item">
                <h3>High School Name</h3>
                <p>Year: 2016 - 2020</p>
            </div>
        </section>
    );
}

export default Education;
