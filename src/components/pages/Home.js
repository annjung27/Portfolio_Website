import React from 'react'
import Contact from '../Contact'
import About from '../About'
import Skills from '../Skills'
import Main from '../Main'
import './Home.css';
import Portfolio from '../Portfolio'

function Home() {
  return (
    <div id='home'>
        <Main />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
    </div>
  )
}

export default Home