import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section id='skills'>
      <p className='category-title'>03 Skills</p>
      <div className='skill-list'>
        <div className='skill-set'>
          <h5>Front End</h5>
          <div className='skill-items'>
            <div className='skill'>
              <FontAwesomeIcon icon="fa-brands fa-html5" />
              <p>HTML5</p>              
            </div>
            <div className='skill'>
              <p>CSS</p>              
            </div>
            <div className='skill'>
              <p>JavaScript</p>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills