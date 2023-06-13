import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import Education from "./components/Education";
import Experience from "./components/Experience";
import './css/App.css';
import Notfound from "./components/404";
import NavBar from "./components/navbar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";


const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (

        <Router>
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                <NavBar />
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <ParticleBackground/>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;