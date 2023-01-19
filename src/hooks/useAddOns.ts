import { useState, useRef, RefObject, Dispatch, SetStateAction } from 'react'
import { addOns } from '../constants'
import { AddOns, AddOnsCardAttrs, AddOnsCardInfo } from '../types'

function onAddOnCardClick(
  ref: RefObject<HTMLInputElement>,
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>
) {
  const refCurrentState = ref.current as HTMLInputElement
  refCurrentState.checked = !refCurrentState.checked
  setState(!state)
}

export function useAddOns() {
  const [isOnLineService, setIsOnLineService] = useState(true)
  const [isLargerStorage, setIsLargerStorage] = useState(false)
  const [isCustomizableProfile, setIsCustomizableProfile] = useState(false)

  const onLineServiceRef = useRef<HTMLInputElement>(null)
  const largerStorageRef = useRef<HTMLInputElement>(null)
  const customizableProfileRef = useRef<HTMLInputElement>(null)

  const addOnsAttrs: AddOnsCardAttrs = {
    'Online service': {
      ref: onLineServiceRef,
      isActive: isOnLineService,
      onCardClick: () =>
        onAddOnCardClick(onLineServiceRef, isOnLineService, setIsOnLineService),
    },
    'Larger storage': {
      ref: largerStorageRef,
      isActive: isLargerStorage,
      onCardClick: () =>
        onAddOnCardClick(largerStorageRef, isLargerStorage, setIsLargerStorage),
    },
    'Customizable profile': {
      ref: customizableProfileRef,
      isActive: isCustomizableProfile,
      onCardClick: () =>
        onAddOnCardClick(
          customizableProfileRef,
          isCustomizableProfile,
          setIsCustomizableProfile
        ),
    },
  }

  const addOnsCardsInfo: AddOnsCardInfo[] = addOns.map((addOn: AddOns) => ({
    ...addOn,
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
