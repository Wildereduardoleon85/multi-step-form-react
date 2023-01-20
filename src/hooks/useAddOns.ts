import { useRef, RefObject, useContext } from 'react'
import { addOns } from '../constants'
import { StepContext } from '../context/StepContext'
import { AddOns, AddOnsCardAttrs, AddOnsCardInfo } from '../types'

function onAddOnCardClick(
  ref: RefObject<HTMLInputElement>,
  setState: () => void
) {
  const refCurrentState = ref.current as HTMLInputElement
  refCurrentState.checked = !refCurrentState.checked
  setState()
}

export function useAddOns() {
  const {
    state,
    setIsCustomizableProfile,
    setIsLargerStorage,
    setIsOnlineService,
  } = useContext(StepContext)
  const { isOnLineService, isLargerStorage, isCustomizableProfile } =
    state.addOns

  const onLineServiceRef = useRef<HTMLInputElement>(null)
  const largerStorageRef = useRef<HTMLInputElement>(null)
  const customizableProfileRef = useRef<HTMLInputElement>(null)

  const addOnsAttrs: AddOnsCardAttrs = {
    'Online service': {
      ref: onLineServiceRef,
      isActive: isOnLineService,
      defaultChecked: isOnLineService,
      onCardClick: () => onAddOnCardClick(onLineServiceRef, setIsOnlineService),
    },
    'Larger storage': {
      ref: largerStorageRef,
      isActive: isLargerStorage,
      defaultChecked: isLargerStorage,
      onCardClick: () => onAddOnCardClick(largerStorageRef, setIsLargerStorage),
    },
    'Customizable profile': {
      ref: customizableProfileRef,
      isActive: isCustomizableProfile,
      defaultChecked: isCustomizableProfile,
      onCardClick: () =>
        onAddOnCardClick(customizableProfileRef, setIsCustomizableProfile),
    },
  }

  const addOnsCardsInfo: AddOnsCardInfo[] = addOns.map((addOn: AddOns) => ({
    ...addOn,
    defaultChecked: addOnsAttrs[addOn.name].defaultChecked,
    ref: addOnsAttrs[addOn.name].ref,
    isActive: addOnsAttrs[addOn.name].isActive,
    onCardClick: addOnsAttrs[addOn.name].onCardClick,
  }))

  return {
    addOnsState: {
      isOnLineService,
      isLargerStorage,
      isCustomizableProfile,
    },
    addOnsCardsInfo,
  }
}
