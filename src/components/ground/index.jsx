import React from "react"
import { Plane } from "@react-three/drei"
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

export default function Ground() {
    const [color, normal, roughness, ao] = useLoader(TextureLoader, [
        'src/components/ground/color.png',
        'src/components/ground/normal.png',
        'src/components/ground/roughness.png',
        'src/components/ground/ao.png',
        
      ]);
    return (
    <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshPhongMaterial 
        map={color}
        normalMap={normal}
        roughnessMap={roughness}
        aoMap={ao}
     />
    </Plane>
    )
}