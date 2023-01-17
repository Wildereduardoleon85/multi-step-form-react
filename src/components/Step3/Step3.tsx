import { Dispatch, SetStateAction } from 'react'
import styles from './step3.module.css'

type Step3Props = {
  setStep: Dispatch<SetStateAction<number>>
}

const { addOns } = styles

function Step3({ setStep }: Step3Props) {
  return (
    <>
      <h2 className='stepTitle'>Pick add-ons</h2>
      <p className='stepSubtitle'>Add-ons enhance your gaming experience</p>
      <div className={addOns}>
        <div>
          <input type='checkbox' />
          <div>
            <p>Online Service</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$1/mo</p>
        </div>
        <div>
          <input type='checkbox' />
          <div>
            <p>Larger storage</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$1/mo</p>
        </div>
        <div>
          <input type='checkbox' />
          <div>
            <p>Customizable profile</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$1/mo</p>
        </div>
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
