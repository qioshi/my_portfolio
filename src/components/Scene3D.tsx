'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

function NetworkNodes() {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const pts = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 1 + Math.random() * 0.3;
      pts.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.random() - 0.5) * 2
      ));
    }
    return pts;
  }, []);

  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance = points[i].distanceTo(points[j]);
        if (distance < 0.8) {
          connections.push({
            start: points[i],
            end: points[j],
            distance
          });
        }
      }
    }
    return connections;
  }, [points]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Rotate based on mouse position
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.5,
      0.1
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.5,
      0.1
    );

    // Animate points
    points.forEach((point, i) => {
      const y = point.y;
      point.y = y + Math.sin(time * 2 + i) * 0.001;
    });

    // Update all geometries
    groupRef.current.children.forEach(child => {
      if (child instanceof THREE.Line) {
        child.geometry.verticesNeedUpdate = true;
        child.geometry.computeBoundingSphere();
      }
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color="#4B0082"
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="h-full w-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <NetworkNodes />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
