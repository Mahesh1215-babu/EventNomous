import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const VenueMesh = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#0EA5E9"
                    attach="material"
                    distort={0.4}
                    speed={3}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const ThreeScene = () => {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas shadows gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                <VenueMesh />

                <OrbitControls
                    enableZoom={false}
                    enableDamping
                    dampingFactor={0.05}
                    rotateSpeed={0.5}
                />

                {/* Background stars/particles blur effect handled via CSS glass container */}
            </Canvas>
        </div>
    );
};

export default ThreeScene;
