import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from '../Buck.jsx'

function App() {

  return (
    <div className="App">
      <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
        <ambientLight intensity={5} />
        <OrbitControls enableZoom={true} />
        <Model />
      </Canvas>
    </div>
  )
}

export default App
