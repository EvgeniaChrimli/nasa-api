import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  position: [number, number, number];
  scale: number;
  isHazardous: boolean;
};
export function Asteroid({ position, scale, isHazardous }: Props) {
  const { scene } = useGLTF("/models/asteroid.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (isHazardous && ref.current) {
      const pulse = 1 + Math.sin(clock.elapsedTime * 9) * 0.03;
      ref.current.scale.setScalar(scale * pulse);
    }
  });

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.material = new THREE.MeshStandardMaterial({
        roughness: 0.8,
        metalness: 0.1,
      });
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      castShadow
    />
  );
}
