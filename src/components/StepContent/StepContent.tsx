import { Dispatch, SetStateAction } from 'react'
import Step1 from '../Step1'
import Step2 from '../Step2'
import Step3 from '../Step3'
import styles from './stepContent.module.css'

type StepContentProps = {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}

const { stepContentContainer } = styles

function StepContent({ step, setStep }: StepContentProps) {
  function renderStep() {
    switch (step) {
      case 1:
        return <Step1 setStep={setStep} />
      case 2:
        return <Step2 setStep={setStep} />
      case 3:
        return <Step3 setStep={setStep} />
      case 4:
        return <h1>Step 4</h1>
      default:
        break
    }
  }

  return <div className={stepContentContainer}>{renderStep()}</div>
}

export default StepContent
