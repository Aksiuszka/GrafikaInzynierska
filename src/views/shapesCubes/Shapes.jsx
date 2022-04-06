import React from 'react';
import './Shapes.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import {MeshWobbleMaterial, OrbitControls} from '@react-three/drei';


function Box({position, args, color, castShadow, speed}) {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

	return (
		<mesh castShadow={castShadow} position={position} ref={mesh}>
			<boxBufferGeometry attach="geometry" args={args} />
			<MeshWobbleMaterial attach="material" color={color} speed={speed} factor={.8}/>
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
				<Box position={[-2,1,0]} args={[1.5,1,0.5]} castShadow="true" color="pink"/>
        <Box position={[-0,1,-5]} args={[1,1,1]} castShadow="true" color="lightblue" speed={6}/>
        <Box position={[3,1,-2]} args={[2,1,1]} castShadow="true" color="salmon"/>
        <OrbitControls/>
			</Canvas>
		</div>
	);
}

export default Shapes;
