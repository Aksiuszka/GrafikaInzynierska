import React from 'react';
import * as THREE from "three";
import './sphere.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import {MeshWobbleMaterial, Cloud, Stars, OrbitControls} from '@react-three/drei';
import planetData from './planetData';


function Spheres() { 
	return (
    <div className="body">
    <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
      <Stars count={3000}/>
    <Sun />
    {planetData.map((planet)=>(
      <Planet planet={planet} key={planet.id}/>
    ))}
    
    <Lights />
    <OrbitControls />
  </Canvas>
  </div>
);
}

function Ellipsa ({ xRadius = 1, zRadius = 1 }){
  const pointsOnEllipsis =[];
  for(let index=0; index<64; index++){
    const angle= (index/64)*2*Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    pointsOnEllipsis.push(new THREE.Vector3(x, 0, z));
  }
  pointsOnEllipsis.push(pointsOnEllipsis[0]);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(pointsOnEllipsis);
  return(
    <line geometry ={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10}/>
      </line>
  );
}
function Sun() {
return (
  <mesh>
    <sphereGeometry args={[2.5, 32, 32]} />
    <meshStandardMaterial color="#E1DC59" />
  </mesh>
);
}
function Planet({ planet:{color, xRadius, zRadius, size, speed}}) {
  const planetRef = React.useRef();
  useFrame(({clock})=>{
    const t = clock.getElapsedTime()*speed;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });
return (
  <>
  <mesh ref={planetRef}>
    <sphereGeometry args={[size, 30, 30]} />
    <meshStandardMaterial color={color} />
  </mesh>
  <Ellipsa xRadius={xRadius} zRadius={zRadius} />
  </>
);
}
function Lights() {
return (
  <>
    <ambientLight />
    <pointLight position={[0, 0, 0]} />
  </>
);

}

export default Spheres;
