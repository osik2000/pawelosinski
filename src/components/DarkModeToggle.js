import React from "react";
import { ReactComponent as Sun } from "../media/Sun.svg";
import { ReactComponent as Moon } from "../media/Moon.svg";
import "../css/DarkModeToggle.css";

const DarkModeToggle = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    }

    const toggleTheme = e => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkModeToggle;
