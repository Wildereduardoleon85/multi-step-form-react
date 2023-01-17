import { useState } from 'react'
import './App.css'
import StepsContainer from './components/StepsContainer'

function App() {
  const [step, setStep] = useState<number>(1)

  return <StepsContainer step={step} setStep={setStep} />
}

export default App
