import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from './components/FirstComponent.jsx'

import SecondComponent from './components/SecondComponent.jsx'

import TemplateExpressions from './components/TemplateExpressions.jsx'
import Events from './components/Events.jsx'
import MostrarImagens from './components/MostrarImagens.jsx'
import MostrarPcTop from './components/MostrarPcTop.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TemplateExpressions />
      <SecondComponent />
      <FirstComponent /> */}
      <Events></Events>
      <MostrarImagens></MostrarImagens> 
      <MostrarPcTop></MostrarPcTop>   
    </>
  )
}

export default App
