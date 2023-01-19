import {
  PersonalInfo,
  SelectedPlan,
  Steps,
  StepState,
  Subscription,
} from '../types'

type StepAction =
  | { type: 'updateStep'; payload: Steps }
  | { type: 'setPersonalInfo'; payload: PersonalInfo }
  | { type: 'setSubscription'; payload: Subscription }
  | { type: 'setSelectedPlan'; payload: SelectedPlan }

export function stepReducer(state: StepState, action: StepAction): StepState {
  const { type, payload } = action

  switch (type) {
    case 'updateStep':
      return {
        ...state,
        step: payload,
      }

    case 'setPersonalInfo':
      return {
        ...state,
        personalInfo: payload,
      }

    case 'setSubscription':
      return {
        ...state,
        planType: {
          ...state.planType,
          subscription: payload,
        },
      }

    case 'setSelectedPlan':
      return {
        ...state,
        planType: {
          ...state.planType,
          selectedPlan: payload,
        },
      }

    default:
      return state
  }
}
