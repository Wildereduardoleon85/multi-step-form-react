import { Dispatch, SetStateAction } from 'react'
import { Steps } from '../../types'
import Step1 from '../Step1'
import Step2 from '../Step2'
import Step3 from '../Step3'
import styles from './stepContent.module.css'

type StepContentProps = {
  step: Steps
  setStep: Dispatch<SetStateAction<Steps>>
}

const { stepContentContainer } = styles

function StepContent({ step, setStep }: StepContentProps) {
  const stepsMapper: { [char: number]: JSX.Element } = {
    1: <Step1 setStep={setStep} />,
    2: <Step2 setStep={setStep} />,
    3: <Step3 setStep={setStep} />,
    4: <h1>Step 4</h1>,
  }

  return <div className={stepContentContainer}>{stepsMapper[step]}</div>
}

export default StepContent
