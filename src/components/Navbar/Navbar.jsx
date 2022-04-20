import React from 'react'
import './Navbar.css'
import {Btn, AreaGray} from './styled';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbarContainer">
        <Link to='/' style={{ textDecoration: 'none' }}><div className="logoContainer">grafika<span className="dot">.</span></div></Link>
        <div className="linkHolder">
            <ul className="linksContainer">
            <Link to='/cubes' style={{ textDecoration: 'none' }}><li>sześciany</li></Link>
            <Link to='/pretzl' style={{ textDecoration: 'none' }}><li>pretzle</li></Link>
            <Link to='/sphere' style={{ textDecoration: 'none' }}><li>układ słoneczny</li></Link>
            <Link to='/author' style={{ textDecoration: 'none' }}><li><div className="makeItButtonLike"><Btn>autor</Btn></div></li></Link>
            </ul>
            </div>
    
    </div>
  )
}

export default Navbar;