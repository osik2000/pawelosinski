import React, {useEffect} from 'react';
import Video from './Video';
import '../css/About.css'

const About = () => {

    useEffect(() => {
        document.title = `Paweł Osiński | About`;
    }, []);

    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="content">
                <div className="text">
                    <p>
                        Fascinated by technology and computers from an early age, I decided to dedicate my future to
                        programming and software development.
                        Backend is the area I specialize in, and my tool language is Java.
                        I am fascinated by the ability to design and create effective and scalable solutions that
                        improve the functionality and performance of applications.
                    </p>
                    <p>
                        But coding and algorithms are not the only things that fill my life.
                        Skateboarding is my great passion that makes me feel alive and free.
                        I spend many hours on my skateboard, exploring different places, pulling off new tricks and
                        connecting with the local skateboarding community.
                        It's not only a way for me to be physically active, but also to relax and unwind after intensive
                        programming.
                    </p>
                    <p>
                        Singing is another part of my life. I love music and love to embody different melodies and
                        sounds.
                        I often participate in local music events and concerts where I can share my voice and emotions
                        with the audience.
                    </p>
                    <p>
                        In addition, to maintain a balance between mind and body, I regularly go to the gym.
                        I believe that taking care of my physical health helps me maintain the focus and stamina needed
                        during long hours of programming.
                    </p>
                </div>
                <div className="video">
                    <Video/>
                </div>

            </div>

        </section>
    );
}

export default About;