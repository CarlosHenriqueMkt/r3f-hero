import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Camera from './components/camera'
import Michelle from './models/Michelle/Michelle'
/* import Ground from './components/ground' */
import './App.css'

export default function App() {
  return (
    <>
        <nav className='menu'>
          <ul>
            <li>História</li>
            <li>Faixas</li>
            <li>Eventos</li>
          </ul>
        </nav>
    <div className='wrapper'>
      <div className='content'>
        <h1>Capoeira</h1>
        <p>Lorem ipsum</p>
      </div>
      <Canvas className='canvas'
      resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
      >
        <Camera/>
        <ambientLight intensity={0.5} color={"#ffffff"} />
        <Suspense fallback={null}>
        <Michelle />
        </Suspense>
        {/* <Ground /> */}
        <Environment files='bg2.hdr' background/>
      </Canvas>
    </div>
    </>
  )
}
