import { useContext } from 'react'
import { AddOnsCardInfo } from '../../types'
import styles from './step3.module.css'
import AddOnsCard from '../ui/addOnsCard'
import { useAddOns, useMediaQuery } from '../../hooks'
import { StepContext } from '../../context/StepContext'
import Footer from '../ui/Footer'

const { addOns } = styles

function Step3() {
  const { updateStep } = useContext(StepContext)
  const addOnsCardsInfo = useAddOns()
  const { isMobile } = useMediaQuery()

  return (
    <>
      <h2 className='stepTitle'>Pick add-ons</h2>
      <p className='stepSubtitle'>Add-ons enhance your gaming experience</p>
      <div className={addOns}>
        {addOnsCardsInfo.map((addOnsCardInfo: AddOnsCardInfo) => (
          <AddOnsCard key={addOnsCardInfo.name} {...addOnsCardInfo} />
        ))}
      </div>
      {isMobile ? (
        <>
          <Footer>
            <button
              type='button'
              className='btn go-back-button mobile'
              onClick={() => updateStep(2)}
            >
              Go Back
            </button>
            <button
              className='btn btn-primary next-button mobile'
              type='button'
              onClick={() => updateStep(4)}
            >
              Next Step
            </button>
          </Footer>
        </>
      ) : (
        <>
          <button
            type='button'
            className='btn go-back-button'
            onClick={() => updateStep(2)}
          >
            Go Back
          </button>
          <button
            className='btn btn-primary next-button'
            type='button'
            onClick={() => updateStep(4)}
          >
            Next Step
          </button>
        </>
      )}
    </>
  )
}

export default Step3
