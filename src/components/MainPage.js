import React from 'react';
import About from "./About";
import Education from "./Education";
import '../css/MainPage.css'
import Experience from "./Experience";
import Contact from "./Contact";

const MainPage = () => {
    return (
        <section id="mainpage">
            <h1>Main Page</h1>
            <About/>
            <Education/>
            <Experience/>
            <Contact/>
        </section>
    );
}

export default MainPage;