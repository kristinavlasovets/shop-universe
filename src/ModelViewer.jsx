import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, ContactShadows } from "@react-three/drei";
import Model from "./Model";

const ModelViewer = ({ modelPath }) => {
  return (
    <Canvas shadows
     camera={{ position: [0, 0, 6], fov: 40 }}
     style={{ background: 'transparent' }}>
      <ambientLight intensity={0.4} />
         <directionalLight 
       position={[5, 10, 7.5]} 
       intensity={1.5} 
       castShadow
       shadow-mapSize-width={2048}
       shadow-mapSize-height={2048}
     />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 5, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        contactShadow
      />
      <Stage environment="city" adjustCamera intensity={1.8} shadows={{ enabled: true, type: "contact" }}>
        <Model modelPath={modelPath} />
      </Stage>
           <ContactShadows
       position={[10, -1, 0]}
       opacity={0.4}
       scale={10}
       blur={1}
       far={10}
     />

      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
