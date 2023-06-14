import React, {useEffect} from 'react';
import '../css/Experience.css'


const Experience = () => {
    useEffect(() => {
        document.title = `Paweł Osiński | Experience`;
    }, []);

    return (
        <section className="experience">
            <h2>Experience</h2>
            <div className="content">
                <div className="text">
                    <h3>Best Company</h3>
                    <p>Position: Intern (Backend Java Developer)</p>
                    <p>Year: 2023 - 2024</p>
                </div>
                <div className="text">
                    <h3>Pizza Hut</h3>
                    <p>Position: Driver</p>
                    <p>Year: 2019 - 2023</p>
                </div>
            </div>
        </section>
    );
}

export default Experience;
