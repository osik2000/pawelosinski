import React from 'react';
import '../css/MainPage.css'

const MainPage = () => {
    return (
        <section id="mainpage">
            <h1>Paweł Osiński - Portfolio</h1>
            <div className="content">
                <div className="text">
                    <p>
                        Hello, I am Paweł Osiński, a third-year student of computer science at the renowned Nicolaus Copernicus University in Torun.
                        I'm glad that you are here and that I can share my passion and achievements with you.
                    </p>
                    <p>
                        On this portfolio page I will share some info about me, experience and skills I have gained.
                        I invite you to learn about my achievements and explore my world of programming, skateboarding, singing and healthy lifestyle.
                        Thank you for visiting my site and enjoy!
                    </p>
                </div>
                <div className="image">
                    <img src={require('../media/pawel.jpg') } alt="Moje zdjecie"/>
                </div>
            </div>
        </section>
    );
}

export default MainPage;