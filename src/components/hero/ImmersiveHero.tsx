import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
                <MeshDistortMaterial
                    color="#D4AF37"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={1}
                />
            </Sphere>
        </Float>
    );
};

const ImmersiveHero = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />
                <AnimatedShape />
                <gridHelper args={[20, 20, '#D4AF37', '#E2E8F0']} position={[0, -4, 0]} rotation={[0, 0, 0]} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"></div>
        </div>
    );
};

export default ImmersiveHero;
