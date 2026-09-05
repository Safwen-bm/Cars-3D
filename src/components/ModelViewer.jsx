import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls, Environment, Stage } from "@react-three/drei";
import { Polestar_Car } from "./models/2020_polestar";

const ModelViewer = ({ rotateSpeed, activeModel }) => {
  const [webglSupported, setWebglSupported] = useState(true);
  const controlsRef = useRef(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebglSupported(false);
    } catch (error) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) return <div>WebGL not supported.</div>;

  return (
    <Canvas
      camera={{ position: [3, 2, 5], fov: 35 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.08} adjustCamera={1.6}>
          <group position={[0, -0.3, 0]}>
            {activeModel === "Polestar_Car" && <Polestar_Car key="polestar" />}
          </group>
        </Stage>
        <Environment preset="city" />
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={false}
          autoRotate={rotateSpeed > 0}
          autoRotateSpeed={rotateSpeed}
          onStart={() => {
            if (controlsRef.current) controlsRef.current.autoRotate = false;
          }}
          onEnd={() => {
            if (controlsRef.current) controlsRef.current.autoRotate = rotateSpeed > 0;
          }}
          minDistance={1}
          maxDistance={8}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;