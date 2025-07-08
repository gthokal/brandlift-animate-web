'use client';
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function earth() {

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/images/color.jpg',
        '/images/normal.png',
        '/images/occlusion.jpg'
    ])

    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <mesh scale={2.5}>
                <sphereGeometry args={[1, 64, 64]}/>
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
            </mesh>
        </Canvas>
    )
}