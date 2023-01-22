import { useContext } from 'react'
import { StepContext } from '../../context/StepContext'
import { useFishingUp, useMediaQuery } from '../../hooks'
import { capitalize } from '../../utils'
import Footer from '../ui/Footer'
import styles from './step4.module.css'

const {
  cardContainer,
  summaryCard,
  addOnPrize,
  planPrize,
  planLabel,
  label,
  changeLabel,
  total,
} = styles

function Step4() {
  const {
    state: {
      planType: { selectedPlan, subscription },
    },
    updateStep,
  } = useContext(StepContext)
  const { selectedPlanPrize, summarizedAddOns, totalPrize } = useFishingUp()
  const { isMobile } = useMediaQuery()

  const isMonthly = subscription === 'monthly'
  const subscriptionPrizeLabel = isMonthly ? 'mo' : 'yr'
  const subscriptionTotalLabel = isMonthly ? 'per month' : 'per year'
  const formattedSelectedPlan = capitalize(selectedPlan)
  const formattedSubscription = capitalize(subscription)

  return (
    <>
      <h2 className='stepTitle'>Fishing up</h2>
      <p className='stepSubtitle'>
        Double-check everything looks OK before confirming
      </p>
      <div className={cardContainer}>
        <div className={summaryCard}>
          <div>
            <div>
              <p
                className={planLabel}
              >{`${formattedSelectedPlan} (${formattedSubscription})`}</p>
              <p
                className={`${label} ${changeLabel}`}
                onClick={() => updateStep(2)}
              >
                Change
              </p>
            </div>
            <div>
              <p
                className={planPrize}
              >{`$${selectedPlanPrize}/${subscriptionPrizeLabel}`}</p>
            </div>
          </div>
          {summarizedAddOns.map(({ name, monthlyCost, yearlyCost }: any) => (
            <div key={name}>
              <p className={label}>{name}</p>
              <p className={addOnPrize}>{`+$${
                isMonthly ? monthlyCost : yearlyCost
              }/${subscriptionPrizeLabel}`}</p>
            </div>
          ))}
        </div>
        <div className={total}>
          <p className={label}>{`Total (${subscriptionTotalLabel})`}</p>
          <p>{`+$${totalPrize}/${subscriptionPrizeLabel}`}</p>
        </div>
      </div>
      {isMobile ? (
        <>
          <Footer>
            <button
              type='button'
              className='btn go-back-button mobile'
              onClick={() => updateStep(3)}
            >
              Go Back
            </button>
            <button
              className='btn btn-purple next-button mobile'
              type='button'
              onClick={() => updateStep(5)}
            >
              Confirm
            </button>
          </Footer>
        </>
      ) : (
        <>
          <button
            type='button'
            className='btn go-back-button'
            onClick={() => updateStep(3)}
          >
            Go Back
          </button>
          <button
            className='btn btn-purple next-button'
            type='button'
            onClick={() => updateStep(5)}
          >
            Confirm
          </button>
        </>
      )}
    </>
  )
}

export default Step4
