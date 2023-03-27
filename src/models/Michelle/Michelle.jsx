import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/michelle.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Kick.play()
    actions.Kick.setEffectiveTimeScale(0.5)
  })
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[2, 0, 0]} rotation={[Math.PI / 2, 0, 1]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Ch03" geometry={nodes.Ch03.geometry} material={materials.Ch03_Body} skeleton={nodes.Ch03.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/michelle.glb')
