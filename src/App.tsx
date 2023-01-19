import { useState } from 'react'
import './App.css'
import StepsContainer from './components/StepsContainer'
import { Steps } from './types'

function App() {
  const [step, setStep] = useState<Steps>(1)

  return <StepsContainer step={step} setStep={setStep} />
}

export default App
