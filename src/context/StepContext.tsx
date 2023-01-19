import { createContext } from 'react'
import {
  PersonalInfo,
  SelectedPlan,
  Steps,
  StepState,
  Subscription,
} from '../types'

type StepContextProps = {
  state: StepState
  updateStep: (step: Steps) => void
  setPersonalInfo: (personalInfo: PersonalInfo) => void
  setSubscription: (subscription: Subscription) => void
  setSelectedPlan: (selectedPlan: SelectedPlan) => void
}

export const StepContext = createContext<StepContextProps>(
  {} as StepContextProps
)
