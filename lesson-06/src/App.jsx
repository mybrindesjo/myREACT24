import { useState } from 'react'
import './App.css'
import FunctionComponent from './components/FunctionComponent'
import BasicEffect from './components/BasicEffect'
import CleanupEffect from './components/CleanupEffect'
import Navbar from './components/Navbar'
import ThemeSwitcher from './components/ThemeSwitcher'
import ColorPicker from './components/ColorPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ThemeSwitcher />
      <ColorPicker />
      <BasicEffect />
      <CleanupEffect />
      <FunctionComponent />
    </>
  )
}

export default App
