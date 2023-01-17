import { Dispatch, SetStateAction } from 'react'
import SideBar from '../SideBar'
import StepContent from '../StepContent'
import styles from './stepsContainer.module.css'

type StepsContainerProps = {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}

function StepsContainer({ step, setStep }: StepsContainerProps) {
  return (
    <main>
      <div className={styles.stepsContainer}>
        <SideBar step={step} />
        <StepContent step={step} setStep={setStep} />
      </div>
    </main>
  )
}

export default StepsContainer
