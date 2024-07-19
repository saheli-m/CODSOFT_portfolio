import React from 'react';
import Profile from './images/Profile.jpg';

const Home = () => {
    return (
        <section id="home" className="hero-banner">
            <div className="hero-content">
                <img src={Profile} alt="Saheli Maity" className="profile-picture" />
                <h1>Saheli Maity</h1>
                <p className='fw-semibold'>WEB DEVELOPER</p>                    
            </div>
            <div className="container">
                <p className='mb-2'>Hi, I'm a passionate Full Stack Web Developer with expertise in creating dynamic and user-friendly web applications using the MERN stack. 
                  Explore my projects and get to know more about my journey and skills.
                </p>                
                <a href="about" className="more">Learn More About Me</a>
            </div>
        </section>
    );
}

export default Home;
