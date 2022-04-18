import React from 'react';
import './sphere.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import {MeshWobbleMaterial, Cloud, OrbitControls} from '@react-three/drei';


function Box({position, args, color, castShadow, speed}) {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

	return (
		<mesh castShadow={castShadow} position={position} ref={mesh}>
			<sphereBufferGeometry attach="geometry" args={args} />
			<MeshWobbleMaterial shininess={250} color={color}/>
		</mesh>
	);
}
function Shapes() {
	return (
		<div className="body">
			Shapes123
			<Canvas shadows={true} colorManagement>
        <ambientLight intensity={.7}/>
        <directionalLight
        position={[0,10,0]} intensity={.5} castShadow={true}/>
        <pointLight position={[-20,0,-20]} intensity={.5}/>
        <pointLight position={[0,-10,0]} intensity={.5}/>
        <group>
          <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0,-3,0]}>
            <planeBufferGeometry attach='geometry' args={[70,70]}/>
          <shadowMaterial attach="material" opacity={0.1}/> 
          </mesh>
        </group>
		 {/* <Cloud
  opacity={0.5}
  speed={0.4} // Rotation speed
  width={10} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={20} // Number of particles
/>
<Cloud
  opacity={0.8}
  speed={0.9} // Rotation speed
  width={20} // Width of the full cloud
  depth={6.5} // Z-dir depth
  segments={10} // Number of particles
/>  */}
        <Box position={[-0,1,-5]} args={[3,96,30]} castShadow="true" color="coral" speed={6}/>
        <Box position={[-10,1,-5]} args={[1,36,30]} castShadow="true" color="white" speed={6}/>
        <OrbitControls/>
			</Canvas>
		</div>
	);
}

export default Shapes;
