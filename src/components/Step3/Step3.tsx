import { Dispatch, SetStateAction } from 'react'
import { AddOnsCardInfo, Steps } from '../../types'
import styles from './step3.module.css'
import AddOnsCard from '../ui/addOnsCard'
import { useAddOns } from '../../hooks'

type Step3Props = {
  setStep: Dispatch<SetStateAction<Steps>>
}

const { addOns } = styles

function Step3({ setStep }: Step3Props) {
  const { addOnsCardsInfo } = useAddOns()

  return (
    <>
      <h2 className='stepTitle'>Pick add-ons</h2>
      <p className='stepSubtitle'>Add-ons enhance your gaming experience</p>
      <div className={addOns}>
        {addOnsCardsInfo.map((addOnsCardInfo: AddOnsCardInfo) => (
          <AddOnsCard
            key={addOnsCardInfo.name}
            name={addOnsCardInfo.name}
            description={addOnsCardInfo.description}
            isActive={addOnsCardInfo.isActive}
            onCardClick={addOnsCardInfo.onCardClick}
            monthlyCost={addOnsCardInfo.monthlyCost}
            ref={addOnsCardInfo.ref}
          />
        ))}
      </div>
      <button
        type='button'
        className='btn go-back-button'
        onClick={() => setStep(2)}
      >
        Go Back
      </button>
      <button
        className='btn btn-primary next-button'
        type='button'
        onClick={() => setStep(4)}
      >
        Next Step
      </button>
    </>
  )
}

export default Step3
