import React from 'react';
import './Skills.css';
import { CardGroup, Card } from 'react-bootstrap';

function Skills() {
    return (
        <section id="skills">
            <p className='category-title'>02 skills</p>

            <CardGroup className='card-group'>
                <Card className='card'>
                    <Card.Header className='card-header'>Frontend</Card.Header>
                    
                    <div className='card-text'>
                        <ul className='skills-items'>
                            <li><i className="fa-brands fa-html5"></i><span>HTML</span></li>
                            <li><i className="fa-brands fa-css3-alt"></i>CSS</li>
                            <li><i className="fa-brands fa-js"></i>JavaScript</li>
                            <li><i className="fa-brands fa-react"></i>React.js</li>                         
                            <li><i className="fa-brands fa-bootstrap"></i>Bootstrap</li>                            
                        </ul>
                    </div>
                    
                    
                </Card>
                <Card className='card'>
                    <Card.Header className='card-header'>Backend</Card.Header>
                                        
                    <div className='card-text'>
                        <ul className='skills-items'>
                            <li><i className="fa-brands fa-java"></i>Java</li>
                            <li><i className="fa-brands fa-python"></i>Python</li>
                            <li><i className="fa-brands fa-node"></i>Node.js</li>
                            <li><i className="fa-solid fa-leaf"></i>Spring MVC</li>
                            <li><i className="fa-solid fa-laptop-code"></i>Express</li>
                            <li><i className="fa-solid fa-laptop-code"></i>Flask</li>
                            <li><i className="fa-solid fa-database"></i>MySQL</li>                            
                            <li><i className="fa-solid fa-database"></i>MongoDB</li>                            
                        </ul>                    
                    </div>
                    
                </Card>
                <Card className='card'>
                    <Card.Header className='card-header'>Other</Card.Header>
                
                    <div className='card-text'>
                        <ul className='skills-items'>
                            <li><i className="fa-brands fa-git-square"></i>Git</li>
                            <li><i className="fa-brands fa-github"></i>GitHub</li>                                                        
                        </ul>
                    </div>
                    
                </Card>
                
            </CardGroup>
        </section>
    )
}

export default Skills