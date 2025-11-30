import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Icosahedron,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ icon }) => {
  const decal = useTexture([icon.icon]);
  console.log("Icon in IcosahedronMesh:", icon.icon);
  return (
    <Float speed={0.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <Icosahedron args={[1, 1]}>
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            flatShading
            map={decal[0]}
          />
        </Icosahedron>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Ball icon={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
