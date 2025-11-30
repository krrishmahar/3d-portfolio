import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";

const Stars = () => {
  const ref = useRef();

  // generate star positions around the planet
  const [sphere] = random.inSphere(new Float32Array(5000), {
    radius: 2.5, // increased radius so stars orbit clearly outside the sphere
  });

  useFrame((state, delta) => {
    // orbit effect
    ref.current.rotation.y += delta * 0.2;
    ref.current.rotation.x += delta * 0.1;
  });

  return (
    <>
      {/* The central sphere (planet) */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"#2244ff"} />
      </mesh>

      {/* Orbiting stars */}
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color="#f272c8"
            size={0.003}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} />

        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
