import React from 'react'
import webdev from '../assets/webdev.png'

const About = () => {
    return (
        <section id="about">
            <div className="container about-main">
                <div className="about__container">
                    <img src={webdev} className="about-img" alt="About image" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>Hi I am Pratik Nikam.<br />I am Full Stack Developer and Competitive Programmer located in India.</p>
                    <p>I am 3* star coder on Geeksforgeeks and 1700+ contest rating . Its fun for me taking part in Competitive Programming. I am curious to know about how things work around.</p>
                    <p>I passionate about programming and have a great interest in Full Stack Development. I am also fascinated about AI/ML.</p>                    
                </div>
            </div>
        </section>
    )
}

export default About
