import React from 'react'
import Contact from '../Contact'
import About from '../About'
import Main from '../Main'
import './Home.css';
import Portfolio from '../Portfolio'
import Skills from '../Skills';

function Home() {
  return (
    <div id='home'>
        <Main />
        <About />
        <Skills />
        <Portfolio />      
        <Contact />
    </div>
  )
}

export default Home