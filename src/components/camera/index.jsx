import { PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export default function Camera() {
        const cameraRef = useRef()
      
        // Define a posição mínima em Y que a câmera pode ter
        const minX = 0
        const minY = 1
        const minZ = 5
      
        useFrame(() => {
          // Verifica se a posição Y da câmera é menor que o valor mínimo
          if (cameraRef.current.position.y < minY) {
            // Limita a posição Y da câmera ao valor mínimo
            cameraRef.current.position.y = minY
          }
      
          // Verifica se a posição Z da câmera é menor que o valor mínimo
          if (cameraRef.current.position.z < minZ) {
            // Limita a posição Z da câmera ao valor mínimo
            cameraRef.current.position.z = minZ
          }
          
          // Verifica se a posição X da câmera é menor que o valor mínimo
          if (cameraRef.current.position.x < minX) {
            // Limita a posição X da câmera ao valor mínimo
            cameraRef.current.position.x = minX
          }
        })
      
        return (
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[0, 0, 0]}
            // Define outras propriedades da câmera aqui
          />
        )
}

