import './App.css'
import StepsContainer from './components/StepsContainer'
import TopBar from './components/ui/TopBar'
import { StepProvider } from './context/StepProvider'

function App() {
  return (
    <StepProvider>
      <TopBar />
      <StepsContainer />
    </StepProvider>
  )
}

export default App
