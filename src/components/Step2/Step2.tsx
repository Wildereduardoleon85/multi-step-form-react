import { ChangeEvent, MouseEvent, useContext } from 'react'
import styles from './step2.module.css'
import { planBadges } from '../../constants'
import PlanCard from '../ui/PlanCard'
import { PlanBadge as PlanBadgeType, SelectedPlan } from '../../types'
import SwitchButton from '../ui/SwitchButton'
import { StepContext } from '../../context/StepContext'

const { switchContainer, prizes, active } = styles

function Step2() {
  const {
    state: {
      planType: { selectedPlan, subscription },
    },
    setSubscription,
    setSelectedPlan,
    updateStep,
  } = useContext(StepContext)

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

  function onNextStepClick() {
    updateStep(3)
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
          <SwitchButton
            onChange={onSwitchChange}
            defaultChecked={subscription === 'yearly'}
          />
          <p className={subscription === 'yearly' ? active : ''}>Yearly</p>
        </div>
      </div>
      <button
        type='button'
        className='btn go-back-button'
        onClick={() => updateStep(1)}
      >
        Go Back
      </button>
      <button
        className='btn btn-primary next-button'
        type='button'
        onClick={onNextStepClick}
      >
        Next Step
      </button>
    </>
  )
}

export default Step2
