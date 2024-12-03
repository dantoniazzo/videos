import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Desk from "./Desk";
function App() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.5,
        far: 200,
        position: [0, 0, -3],
      }}
    >
      <directionalLight castShadow position={[7, 2, 0]} intensity={4.5} />
      <OrbitControls makeDefault />
      <ambientLight intensity={1.5} />
      <Desk />
    </Canvas>
  );
}

export default App;
