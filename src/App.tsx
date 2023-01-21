import './App.css'
import StepsContainer from './components/StepsContainer'
import { StepProvider } from './context/StepProvider'

function App() {
  return (
    <StepProvider>
      <StepsContainer />
    </StepProvider>
  )
}

export default App
