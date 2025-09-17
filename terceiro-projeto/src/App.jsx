import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Varia from './components/Varia'
import Listagem from './components/Listagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Varia/>
      <Listagem/>
    </>
  )
}

export default App
