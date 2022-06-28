import React from 'react';
import './Main.css';
import background from '../images/img2.jpg';

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
                    <h2>ANNIE YOUNJU JUNG</h2>
                    <p>WEB DEVELOPER</p>
                </div>
            </div>            
        </section>
        
    )
}

export default Main