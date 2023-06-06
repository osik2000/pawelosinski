import React from 'react';
import '../css/Video.css'


const Video = () => {
    return (
        <div className="video-container">
            <iframe width="1000" height="563" src="https://www.youtube.com/embed/Vt9vYeyl8Js"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="">

            </iframe>
        </div>
    );
}

export default Video;
