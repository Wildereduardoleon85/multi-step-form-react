import { MouseEvent } from 'react'
import arcadeIcon from '../../../assets/icon-arcade.svg'
import advancedIcon from '../../../assets/icon-advanced.svg'
import proIcon from '../../../assets/icon-pro.svg'
import { SelectedPlan, Subscription } from '../../../types'
import styles from './planCard.module.css'

const { planBadge, planInfo, active } = styles

type PlanCardProps = {
  planName: string
  prize: {
    monthly: string
    yearly: string
  }
  subscription: Subscription
  altText: string
  selectedPlan: SelectedPlan
  onSelectedPlan: (e: MouseEvent<HTMLDivElement>) => void
}

const planIcons: { [char: string]: string } = {
  Arcade: arcadeIcon,
  Advanced: advancedIcon,
  Pro: proIcon,
}

const PlanCard = ({
  altText,
  planName,
  prize,
  subscription,
  selectedPlan,
  onSelectedPlan,
}: PlanCardProps) => {
  function setPlanBadgeClassName(planName: SelectedPlan): string {
    if (planName.toLowerCase() === selectedPlan) {
      return `${planBadge} ${active}`
    }

    return planBadge
  }

  return (
    <div
      className={setPlanBadgeClassName(planName as SelectedPlan)}
      onClick={onSelectedPlan}
      id={planName.toLowerCase()}
    >
      <img src={planIcons[planName]} alt={altText} />
      <div className={planInfo}>
        <p>{planName}</p>
        <p>{subscription === 'monthly' ? prize.monthly : prize.yearly}</p>
        {subscription === 'yearly' && <p>2 months free</p>}
      </div>
    </div>
  )
}

export default PlanCard
