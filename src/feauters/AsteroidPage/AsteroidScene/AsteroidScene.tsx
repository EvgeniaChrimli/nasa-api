import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";
import { Asteroid } from "./Asteroid";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import styles from "../styles/scene.module.css";

type Props = {
  isHazardous: boolean;
  diameterKm: number;
  inclinationDeg: number;
  moidKm: number;
};

export function AsteroidScene({
  isHazardous,
  diameterKm,
  inclinationDeg,
  moidKm,
}: Props) {
  const getAsteroidPosition = (
    moidKm: number,
    inclinationDeg: number
  ): [number, number, number] => {
    // нормализуем расстояние (не физически точно, а наглядно)
    const distance = THREE.MathUtils.clamp(moidKm / 5_000_000, 2, 10);

    const inclinationRad = THREE.MathUtils.degToRad(inclinationDeg);

    const x = Math.cos(inclinationRad) * distance;
    const y = Math.sin(inclinationRad) * distance * 0.5;
    const z = -distance;

    return [x, y, z];
  };

  function asteroidScaleRelativeToEarth(diameterKm: number) {
    const EARTH_DIAMETER_KM = 12742;
    const EARTH_VISUAL_SCALE = 1.1;

    const ratio = diameterKm / EARTH_DIAMETER_KM;

    // логарифм сглаживает огромные скачки
    const visualScale = Math.log10(ratio * 1000 + 1) * EARTH_VISUAL_SCALE;

    return THREE.MathUtils.clamp(visualScale, 0.05, EARTH_VISUAL_SCALE * 0.5);
  }
  const position = getAsteroidPosition(moidKm, inclinationDeg);
  const scale = asteroidScaleRelativeToEarth(diameterKm);

  return (
    <div className={styles.sceneWrapper}>
      <Canvas shadows camera={{ position: [0, 1, 14], fov: 30 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} />
        <OrbitControls
          rotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Suspense
          fallback={
            <Html center>
              <div className="text-white">loading...</div>
            </Html>
          }
        >
          <Earth />
          <Asteroid
            position={position}
            scale={scale}
            isHazardous={isHazardous}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
