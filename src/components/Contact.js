import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id='contact' >
      <p className='category-title'>04 contact</p>
      <div className='contact-list'>
        <div className='contact-item'>                    
          <a href='mailto:younjujung27@gmail.com'><i className="fa-solid fa-envelope"></i></a>
          <p>younjujung27@gmail.com</p>     
        </div>
        <div className='contact-item'>
          <a href='https://www.linkedin.com/in/annie-younju-jung/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
          <p>Linkedin</p>
        </div>
        
        <div className='contact-item'>
          <a href='https://github.com/annjung27' target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i></a>
          <p>GitHub</p>
        </div>
      </div>
      <footer>
        <small>&copy; 2022 Created by Annie</small>
      </footer>
    </section>
    
  )
}

export default Contact