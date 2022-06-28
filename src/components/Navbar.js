import React, { useState } from 'react'
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
      
        <div className='navbar-logo-and-icon'>          
            <Link to='/' className='navbar-logo'>
              ANNIE YOUNJU JUNG
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars" }/>
            </div>
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' onClick={closeMobileMenu}>
              <Link to='#main' className='nav-links' smooth>Home</Link>
            </li>
            <li className='nav-item' onClick={closeMobileMenu}>
              <Link to='#about' className='nav-links' smooth>About</Link>
            </li>
              <li className='nav-item' onClick={closeMobileMenu}>
              <Link to='#portfolio' className='nav-links' smooth>Portfolio</Link>
            </li>
            <li className='nav-item' onClick={closeMobileMenu}>
              <Link to='#skills' className='nav-links' smooth>Skills</Link>
            </li>
            <li className='nav-item' onClick={closeMobileMenu}>
              <Link to='#contact' className='nav-links' smooth>Contact</Link>
            </li>
        </ul>
          
        

      </nav>
    </>
  )
}

export default Navbar