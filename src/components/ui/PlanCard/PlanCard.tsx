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
  const isSelected = planName.toLowerCase() === selectedPlan
  const isMonthly = subscription === 'monthly'

  return (
    <div
      className={isSelected ? `${planBadge} ${active}` : planBadge}
      onClick={onSelectedPlan}
      id={planName.toLowerCase()}
    >
      <img src={planIcons[planName]} alt={altText} width={40} height={40}/>
      <div className={planInfo}>
        <p>{planName}</p>
        <p>{isMonthly ? `$${prize.monthly}/mo` : `$${prize.yearly}/yr`}</p>
        {subscription === 'yearly' && <p>2 months free</p>}
      </div>
    </div>
  )
}

export default PlanCard
