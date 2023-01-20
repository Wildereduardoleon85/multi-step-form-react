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
  | { type: 'setIsOnlineService' }
  | { type: 'setIsLargerStorage' }
  | { type: 'setIsCustomizableProfile' }

export function stepReducer(state: StepState, action: StepAction): StepState {
  switch (action.type) {
    case 'updateStep':
      return {
        ...state,
        step: action.payload,
      }

    case 'setPersonalInfo':
      return {
        ...state,
        personalInfo: action.payload,
      }

    case 'setSubscription':
      return {
        ...state,
        planType: {
          ...state.planType,
          subscription: action.payload,
        },
      }

    case 'setSelectedPlan':
      return {
        ...state,
        planType: {
          ...state.planType,
          selectedPlan: action.payload,
        },
      }

    case 'setIsOnlineService':
      return {
        ...state,
        addOns: {
          ...state.addOns,
          isOnLineService: !state.addOns.isOnLineService,
        },
      }

    case 'setIsLargerStorage':
      return {
        ...state,
        addOns: {
          ...state.addOns,
          isLargerStorage: !state.addOns.isLargerStorage,
        },
      }

    case 'setIsCustomizableProfile':
      return {
        ...state,
        addOns: {
          ...state.addOns,
          isCustomizableProfile: !state.addOns.isCustomizableProfile,
        },
      }

    default:
      return state
  }
}
