import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls, softShadows, Stars} from '@react-three/drei';
//import useDrag from '../../Hooks/useDrag';
import './Pretzel.scss'

softShadows();

function Pretzel({position, args, color, castShadow, wireframe, scale}) {
	const mesh = useRef();
	
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02));
	const [clicked, click] = useState(false)
	return (
		<>
		<mesh castShadow={castShadow} position={position} wireframe={wireframe} ref={mesh} scale={clicked ? 1.2 : .85}
		onClick={() => click(!clicked)}>
			<torusKnotGeometry args={[.5, 0.2, 128, 32]}/>
			<meshPhongMaterial shininess={250} color={color}/>
		</mesh>
		</>
	);
}
function Shapes() {
	
	return (
		<div className="body">
			Shapes12356
			<Canvas shadows={true} colorManagement>
        <ambientLight intensity={.7}/>
        <directionalLight
        position={[0,10,0]} intensity={.5} castShadow={true}/>
        <pointLight position={[-20,0,-20]} intensity={.5}/>
        <pointLight position={[0,-10,0]} intensity={.5}/>
        <group>
          <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0,-3,0]}>
            <planeBufferGeometry attach='geometry' args={[170,170]}/>
          <shadowMaterial attach="material" opacity={0.25}/> 
          </mesh>
        </group>
		<Stars count={2000} />
		<Pretzel  position={[-2,2,0]} args={[2.5,1,0.5]} castShadow="true" color="salmon"/>
        <Pretzel position={[-0,1,-5]} args={[1,1,1]} castShadow="true" color="black" speed={6}/>
        <Pretzel  position={[3,0,-2]} args={[2,1,1]} castShadow="true" color="salmon"/>
		
        <OrbitControls/>
		
			</Canvas>
		
		</div>
	);
}

export default Shapes;