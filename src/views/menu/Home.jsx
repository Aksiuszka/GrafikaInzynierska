import React, { useRef, useState } from 'react'
import './Home.css';
import CosmicGal from '../../assets/Error Broken Robot.png'
import Navbar from 'components/Navbar/Navbar';
import video from '../../assets/Valley-sunset.mp4';
import {Btn, AreaGray} from '../../components/Navbar/styled';
import useDrag  from '../../Hooks/useDrag';
function Home() {
  const robotRef = useRef();
  const [translate, setTranslate] = useState({x:0, y:0});
  const handleDrag = e =>{
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  }
  const drag = useDrag(robotRef, [translate], {onDrag: handleDrag})
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
            <div ref={robotRef}
              style={{
                transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
              }}>
            <img class="imgMain" src={CosmicGal} alt="alt"/>
            </div>
            </AreaGray>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Home