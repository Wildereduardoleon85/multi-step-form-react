import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from 'react'
import styles from './step2.module.css'
import { planBadges } from '../../constants'
import PlanCard from '../ui/PlanCard'
import {
  PlanBadge as PlanBadgeType,
  SelectedPlan,
  Steps,
  Subscription,
} from '../../types'
import SwitchButton from '../ui/SwitchButton'

type Step2Props = {
  setStep: Dispatch<SetStateAction<Steps>>
}

const { switchContainer, prizes, active } = styles

function Step2({ setStep }: Step2Props) {
  const [subscription, setSubscription] = useState<Subscription>('monthly')
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>('arcade')

  function onSwitchChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setSubscription('yearly')
    } else {
      setSubscription('monthly')
    }
  }

  function onSelectedPlan(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement
    setSelectedPlan(target.id as SelectedPlan)
  }

  function setPlanBadgeProps(planBadge: PlanBadgeType) {
    return {
      ...planBadge,
      subscription,
      selectedPlan,
      onSelectedPlan,
      key: planBadge.planName,
    }
  }

  return (
    <>
      <h2 className='stepTitle'>Select your plan</h2>
      <p className='stepSubtitle'>
        You have the option of monthly or yearly billing.
      </p>
      <div>
        <div className={prizes}>
          {planBadges.map((planBadge) => (
            <PlanCard {...setPlanBadgeProps(planBadge)} />
          ))}
        </div>
        <div className={switchContainer}>
          <p className={subscription === 'monthly' ? active : ''}>Monthly</p>
          <SwitchButton onChange={onSwitchChange} />
          <p className={subscription === 'yearly' ? active : ''}>Yearly</p>
        </div>
      </div>
      <button
        type='button'
        className='btn go-back-button'
        onClick={() => setStep(1)}
      >
        Go Back
      </button>
      <button
        className='btn btn-primary next-button'
        type='button'
        onClick={() => setStep(3)}
      >
        Next Step
      </button>
    </>
  )
}

export default Step2
