import React from 'react';
import '../css/Video.css'


const Video = () => {
    return (
        <div className="video-container">
            <iframe width="964" height="723" src="https://www.youtube.com/embed/KMU0tzLwhbE" title="Developers"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
        </div>
    );
}

export default Video;
