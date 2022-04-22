import React from 'react'
import './Home.css';
import CosmicGal from '../../assets/Error Broken Robot.png'
import Navbar from 'components/Navbar/Navbar';
import video from '../../assets/Valley-sunset.mp4';
import {Btn, AreaGray} from '../../components/Navbar/styled';
function Home() {
  return (
    <div className="MainBody">
      <video className="video" 
      autoPlay 
      loop
      playsInLine
      muted>
        <source
          src={video}
          type="video/mp4"
        />
      </video>
        {/* <div className="MainImgHolder"><img src={Planets} alt="cosmic img" className="imgMain"/></div> */}
        <div className="border">
            <Navbar/>
            <div className="mainContentContainer">
            <AreaGray>
            <div className="header">Grafika</div>
            <div className="header makePink">komputerowa</div>
            <div className="subheader">Praca na zaliczenie przedmiotu grafika komupterowa</div></AreaGray>
            <AreaGray>
            <img class="imgMain" src={CosmicGal} alt="alt"/></AreaGray>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Home