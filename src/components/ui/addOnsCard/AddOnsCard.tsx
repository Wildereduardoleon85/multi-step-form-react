import { forwardRef, Ref } from 'react'
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
      defaultChecked,
    }: AddOnsCardProps,
    ref: Ref<HTMLInputElement>
  ) => {
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
        <p>{`+$${monthlyCost}`}/mo</p>
      </div>
    )
  }
)

export default AddOnsCard
