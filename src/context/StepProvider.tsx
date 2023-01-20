import { useMemo, useReducer } from 'react'
import { getPersonalInfoFromLS, getPlanTypefoFromLS } from '../helpers'
import {
  PersonalInfo,
  SelectedPlan,
  Steps,
  StepState,
  Subscription,
} from '../types'
import { StepContext } from './StepContext'
import { stepReducer } from './stepReducer'

type StepProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: StepState = {
  step: 1,
  personalInfo: getPersonalInfoFromLS() || {
    name: '',
    email: '',
    phone: '',
  },
  planType: getPlanTypefoFromLS() || {
    selectedPlan: 'arcade',
    subscription: 'monthly',
  },
  addOns: {
    isOnLineService: true,
    isLargerStorage: false,
    isCustomizableProfile: false,
  },
}

export function StepProvider({ children }: StepProviderProps) {
  const [state, dispatch] = useReducer(stepReducer, initialState)

  function updateStep(step: Steps) {
    dispatch({
      type: 'updateStep',
      payload: step,
    })
  }

  function setPersonalInfo(personalInfo: PersonalInfo) {
    dispatch({
      type: 'setPersonalInfo',
      payload: personalInfo,
    })
  }

  function setSubscription(subscription: Subscription) {
    dispatch({
      type: 'setSubscription',
      payload: subscription,
    })
  }

  function setSelectedPlan(selectedPlan: SelectedPlan) {
    dispatch({
      type: 'setSelectedPlan',
      payload: selectedPlan,
    })
  }

  function setIsOnlineService() {
    dispatch({
      type: 'setIsOnlineService',
    })
  }

  function setIsLargerStorage() {
    dispatch({
      type: 'setIsLargerStorage',
    })
  }

  function setIsCustomizableProfile() {
    dispatch({
      type: 'setIsCustomizableProfile',
    })
  }

  const memoizedState = useMemo(
    () => ({
      state,
      updateStep,
      setPersonalInfo,
      setSubscription,
      setSelectedPlan,
      setIsOnlineService,
      setIsLargerStorage,
      setIsCustomizableProfile,
    }),
    [state, dispatch]
  )

  return (
    <StepContext.Provider value={memoizedState}>
      {children}
    </StepContext.Provider>
  )
}
