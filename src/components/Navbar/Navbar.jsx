import React from 'react'
import './Navbar.css'
import {Btn, AreaGray} from './styled';

function Navbar() {
  return (
    <div className="navbarContainer">
        <div className="logoContainer">grafika<span className="dot">.</span></div>
        <div className="linkHolder">
            <ul className="linksContainer">
            <li>sześciany</li>
            <li>pretzle</li>
            <li>układ słoneczny</li>
            <li><div className="makeItButtonLike"><Btn>autor</Btn></div></li>
            </ul>
            </div>
    
    </div>
  )
}

export default Navbar;