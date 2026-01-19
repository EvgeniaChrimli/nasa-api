import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Earth() {
  const { scene } = useGLTF("/models/earth.glb");
  const ref = useRef<THREE.Group>(null);

  // 🌍 Медленное вращение Земли
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.1} // ⬅️ СТАЛА БОЛЬШЕ
      position={[-1.2, 0, 0]}
      castShadow
      receiveShadow
    />
  );
}
