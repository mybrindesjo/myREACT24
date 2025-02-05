import { useState } from 'react'
import './App.css'
import FunctionComponent from './components/FunctionComponent'
import BasicEffect from './components/BacisEffect'
import CleanupEffect from './components/CleanEffect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicEffect />
      <CleanupEffect />

      <FunctionComponent />
    </>
  )
}

export default App
