/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/Buck.glb 
*/

import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Buck.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Skin} position={[0.007, 1.432, -0.028]} rotation={[0, -Math.PI / 2, 0]} scale={0.306} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Skin} position={[0.007, 1.184, -0.028]} rotation={[0, -Math.PI / 2, 0]} scale={0.306} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Jacket} position={[0.007, 0.162, -0.066]} rotation={[0, -Math.PI / 2, 0]} scale={0.306} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Skin} position={[0.007, 1.067, -0.028]} rotation={[0, -Math.PI / 2, 0]} scale={0.306} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.Jacket} position={[0.007, 1.349, -0.105]} rotation={[0, -Math.PI / 2, 0]} scale={0.306} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.Skin} position={[-0.136, 1.073, -0.054]} rotation={[0, -Math.PI / 2, 0]} scale={0.306} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.Jacket} position={[0.184, 0.156, -0.026]} rotation={[0, -Math.PI / 2, 0]} scale={0.306} />
    </group>
  )
}
export default Model

useGLTF.preload('/Buck.glb')
