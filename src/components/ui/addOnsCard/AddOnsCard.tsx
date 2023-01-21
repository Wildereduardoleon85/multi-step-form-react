import { forwardRef, Ref, useContext } from 'react'
import { StepContext } from '../../../context/StepContext'
import { AddOnsCardProps } from '../../../types'
import Checkbox from '../Checkbox'
import styles from './addOnsCard.module.css'

const { addOns, active } = styles

const AddOnsCard = forwardRef(
  (
    {
      name,
      isActive,
      onCardClick,
      description,
      monthlyCost,
      yearlyCost,
      defaultChecked,
    }: AddOnsCardProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const {
      state: {
        planType: { subscription },
      },
    } = useContext(StepContext)

    const isMonthly = subscription === 'monthly'

    return (
      <div
        className={isActive ? `${addOns} ${active}` : addOns}
        onClick={onCardClick}
      >
        <Checkbox
          ref={ref}
          disablePointerEvents={true}
          defaultChecked={defaultChecked}
        />
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <p>{isMonthly ? `+$${monthlyCost}/$mo` : `+$${yearlyCost}/$yr`}</p>
      </div>
    )
  }
)

export default AddOnsCard
