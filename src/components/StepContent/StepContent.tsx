import { useContext } from 'react'
import { StepContext } from '../../context/StepContext'
import Step1 from '../Step1'
import Step2 from '../Step2'
import Step3 from '../Step3'
import Step4 from '../Step4'
import styles from './stepContent.module.css'

const { stepContentContainer } = styles

function StepContent() {
  const { step } = useContext(StepContext).state

  const stepsByIndex: { [char: number]: JSX.Element } = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
  }

  return <div className={stepContentContainer}>{stepsByIndex[step]}</div>
}

export default StepContent
