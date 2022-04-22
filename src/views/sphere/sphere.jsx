import React from 'react';
import * as THREE from "three";
import './sphere.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import {MeshWobbleMaterial, Cloud, OrbitControls} from '@react-three/drei';

function Spheres() { 
	return (
    <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
    <Sun />
    <Planet />
    <Lights />
    <OrbitControls />
  </Canvas>
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
function Planet() {
return (
  <>
  <mesh position={[5, 0, 0]}>
    <sphereGeometry args={[1, 30, 30]} />
    <meshStandardMaterial color="#78D481" />
  </mesh>
  <Ellipsa xRadius={5} zRadius={5} />
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
