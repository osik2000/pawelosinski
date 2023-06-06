import React from 'react';
import Video from './Video';
import '../css/About.css'

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor placerat varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sit amet nibh mi. Praesent sodales magna sed metus lacinia, a tempor ligula facilisis. Integer posuere justo a quam laoreet, eget pulvinar justo condimentum. Fusce non efficitur tellus, at congue ex. Vestibulum pharetra tortor justo, id vestibulum ligula dapibus nec. Vivamus et enim nec neque lacinia sagittis. Fusce aliquet, nisi a sollicitudin pulvinar, sapien sapien sollicitudin lectus, nec euismod tortor nisi vel turpis.</p>
            <Video />
        </section>
    );
}

export default About;