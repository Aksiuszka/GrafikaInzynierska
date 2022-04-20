import React from 'react'
import './author.css';
import Gal from '../../assets/Untitled-removebg-preview (1).png'
import Navbar from '../../components/Navbar/Navbar';
import videoDay from '../../assets/Valley-night.mp4';
import {Btn, AreaGray} from '../../components/Navbar/styled';

function Author() {
  return (
    <div className="MainBody">
        <p>elo jestem autor</p>
     <video className="video" 
    autoPlay 
    loop
    playsInLine
    muted>
      <source
        src={videoDay}
        type="video/mp4"
      />
    </video>
      {/* <div className="MainImgHolder"><img src={Planets} alt="cosmic img" className="imgMain"/></div> */}
      <div className="borderGreen">
          <Navbar/>
          <div className="mainContentContainer">
          <AreaGray>
          <div className="header">Ania</div>
          <div className="header makePink">Kawecka</div>
          <div className="subheader">Studentka 2 roku informatyki na SWPW w Płocku</div></AreaGray>
          <AreaGray>
          <img class="imgMain" src={Gal} alt="alt"/></AreaGray>
          </div>
          
          
      </div> 
      
  </div>
  )
}

export default Author