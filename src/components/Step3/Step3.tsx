import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { Steps } from '../../types'
import Checkbox from '../ui/Checkbox'
import styles from './step3.module.css'

type Step3Props = {
  setStep: Dispatch<SetStateAction<Steps>>
}

const { addOns, active } = styles

function Step3({ setStep }: Step3Props) {
  const [isOnLineService, setIsOnLineService] = useState(true)
  const [isLargerStorage, setIsLargerStorage] = useState(false)
  const [isCustomizableProfile, setIsCustomizableProfile] = useState(false)

  const onLineServiceRef = useRef<HTMLInputElement>(null)
  const largerStorageRef = useRef<HTMLInputElement>(null)
  const customizableProfileRef = useRef<HTMLInputElement>(null)

  function setActiveClassName(shouldBeActive: boolean) {
    return shouldBeActive ? active : ''
  }

  function onOnlineServiceClick() {
    const onlineServiceCurrentState =
      onLineServiceRef.current as HTMLInputElement
    onlineServiceCurrentState.checked = !onlineServiceCurrentState.checked
    setIsOnLineService(!isOnLineService)
  }

  function onLargerStorageClick() {
    const largerStorageCurrentState =
      largerStorageRef.current as HTMLInputElement
    largerStorageCurrentState.checked = !largerStorageCurrentState.checked
    setIsLargerStorage(!isLargerStorage)
  }

  function onCustomizableProfileClick() {
    const customizableProfileCurrentState =
      customizableProfileRef.current as HTMLInputElement
    customizableProfileCurrentState.checked =
      !customizableProfileCurrentState.checked
    setIsCustomizableProfile(!isCustomizableProfile)
  }

  return (
    <>
      <h2 className='stepTitle'>Pick add-ons</h2>
      <p className='stepSubtitle'>Add-ons enhance your gaming experience</p>
      <div className={addOns}>
        <div
          className={setActiveClassName(isOnLineService)}
          onClick={onOnlineServiceClick}
        >
          <Checkbox
            ref={onLineServiceRef}
            defaultChecked={true}
            disablePointerEvents={true}
          />
          <div>
            <p>Online Service</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$1/mo</p>
        </div>
        <div
          className={setActiveClassName(isLargerStorage)}
          onClick={onLargerStorageClick}
        >
          <Checkbox ref={largerStorageRef} disablePointerEvents={true} />
          <div>
            <p>Larger storage</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$2/mo</p>
        </div>
        <div
          className={setActiveClassName(isCustomizableProfile)}
          onClick={onCustomizableProfileClick}
        >
          <Checkbox ref={customizableProfileRef} disablePointerEvents={true} />
          <div>
            <p>Customizable profile</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$2/mo</p>
        </div>
      </div>
      <button
        type='button'
        className='btn go-back-button'
        onClick={() => setStep(2)}
      >
        Go Back
      </button>
      <button
        className='btn btn-primary next-button'
        type='button'
        onClick={() => setStep(4)}
      >
        Next Step
      </button>
    </>
  )
}

export default Step3
