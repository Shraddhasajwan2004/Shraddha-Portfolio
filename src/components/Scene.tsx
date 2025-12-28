
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Primitive = 'primitive' as any;

const ParticleBackground = ({ count = 120 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const pointsObject = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
    const material = new THREE.PointsMaterial({ 
      size: 0.04, 
      color: "#8b5cf6", 
      transparent: true, 
      opacity: 0.5 
    });
    return new THREE.Points(geometry, material);
  }, [points]);

  return <Primitive object={pointsObject} />;
};

const AnimatedSphere = ({ color, position, scale }: { color: string, position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(t) * 0.0015;
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.4}
        />
      </Sphere>
    </Float>
  );
};

const Scene: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const ambientLight = useMemo(() => new THREE.AmbientLight(0xffffff, 0.4), []);
  const pointLight1 = useMemo(() => new THREE.PointLight(0xffffff, 0.8), []);
  const pointLight2 = useMemo(() => new THREE.PointLight("#8b5cf6", 1.2), []);
  const fog = useMemo(() => new THREE.Fog(isDarkMode ? '#020617' : '#f8fafc', 2, 25), [isDarkMode]);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ height: '100vh', width: '100vw' }}
    >
      <Primitive object={ambientLight} />
      <Primitive object={pointLight1} position={[10, 10, 10]} />
      <Primitive object={pointLight2} position={[-10, -10, -10]} />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1.5} 
      />
      
      <ParticleBackground />
      
      <AnimatedSphere 
        color={isDarkMode ? "#a78bfa" : "#4f46e5"} 
        position={[5, 3, -5]} 
        scale={1.5} 
      />
      <AnimatedSphere 
        color={isDarkMode ? "#22d3ee" : "#0891b2"} 
        position={[-5, -3, -4]} 
        scale={2} 
      />
      
      <Primitive object={fog} attach="fog" />
    </Canvas>
  );
};

export default Scene;
