import React from 'react';
import './Main.css';
import background from '../images/img2.jpg';
import { Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

function Main() {

    const myStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        
        <section id='main'>
            <div className='main-background' style={myStyle}>
                <div className='main-text'>
                    <h2>ANNIE JUNG</h2>
                    <p>WEB DEVELOPER</p>
                    <Link to='#portfolio' smooth="true" ><Button className='main-button'>View Portfolio</Button></Link>
                </div>
            </div>            
        </section>
        
    )
}

export default Main