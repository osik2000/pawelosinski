import React from 'react';
import '../css/Experience.css'


const Experience = () => {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <div className="experience-item">
                <h3>Company A</h3>
                <p>Position: Intern</p>
                <p>Year: 2022 - 2023</p>
            </div>
            <div className="experience-item">
                <h3>Company B</h3>
                <p>Position: Junior Developer</p>
                <p>Year: 2021 - 2022</p>
            </div>
        </section>
    );
}

export default Experience;
