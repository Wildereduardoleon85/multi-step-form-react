import { useState } from 'react'
import './App.css'
import StepsContainer from './components/StepsContainer'
import { StepProvider } from './context/StepProvider'
import { Steps } from './types'

function App() {
  const [step, setStep] = useState<Steps>(1)

  return (
    <StepProvider>
      <StepsContainer step={step} setStep={setStep} />
    </StepProvider>
  )
}

export default App
