import React from 'react'
import profileImg from '../images/img1.jpg';
import './About.css';

function Main() {
    return (
        <section id='about'>
            <p className='category-title'>01 about</p>
            <div className='profile-img'>
                <img src={profileImg} alt='profile'></img>
            </div>
            <div className='profile'>
                <div className='profile-text'>
                    <p className='paragraph'>
                    Hi, I am Annie!
                    I am a Web Developer who loves designing and coding user-friendly websites. I'm passionate about learning new skills and helping people. With a background in financial aid and customer service, I transitioned to software engineering to combine my love for helping people with my passion and interest in technology to work on something creative and exciting.                     
                    </p> 
                    <p className='emailAndLocation'>
                        Email: younjujung27@gmail.com                        
                    </p>
                    <p className='emailAndLocation'>
                        Location: Silicon Valley, CA
                    </p>               
                </div>                
            </div>
        </section>
    )
}

export default Main