import { FormEvent, useContext } from 'react'
import { StepContext } from '../../context/StepContext'
import { updatePersonalInfoInLS } from '../../helpers'
import { useInput } from '../../hooks'
import { UseInput } from '../../types'
import { validateEmail, validateName, validatePhone } from '../../utils'
import styles from './step1.module.css'

const { step1Content, labelGroup, error } = styles

function Step1() {
  const { state, updateStep, setPersonalInfo } = useContext(StepContext)
  const { personalInfo } = state

  const nameInput = useInput(personalInfo.name, validateName)
  const emailInput = useInput(personalInfo.email, validateEmail)
  const phoneInput = useInput(personalInfo.phone, validatePhone)

  const formValues: UseInput[] = [nameInput, emailInput, phoneInput]

  function checkValidation(formValues: UseInput) {
    if (formValues.isValid) return true
  }

  const isFormValid = formValues.every(checkValidation)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!isFormValid) {
      formValues.forEach((formValue: UseInput) => {
        formValue.onBlur()
      })
      return
    }

    const formUpdatedValues = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    }

    updatePersonalInfoInLS(formUpdatedValues)
    setPersonalInfo(formUpdatedValues)
    updateStep(2)
  }

  return (
    <div className={step1Content}>
      <h2 className='stepTitle'>Personal Info</h2>
      <p className='stepSubtitle'>
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={onSubmit}>
        <div>
          <div className={labelGroup}>
            <label htmlFor='name'>Name</label>
            {nameInput.error && <span>{nameInput.error}</span>}
          </div>
          <input
            autoComplete='off'
            name='name'
            type='text'
            placeholder='e.g John'
            className={nameInput.error ? error : ''}
            onChange={nameInput.onChange}
            onBlur={nameInput.onBlur}
            value={nameInput.value}
          />
        </div>
        <div>
          <div className={labelGroup}>
            <label htmlFor='email'>Email Addres</label>
            {emailInput.error && <span>{emailInput.error}</span>}
          </div>
          <input
            autoComplete='off'
            name='email'
            type='email'
            placeholder='jdoe@email.com'
            className={emailInput.error ? error : ''}
            onChange={emailInput.onChange}
            onBlur={emailInput.onBlur}
            value={emailInput.value}
          />
        </div>
        <div>
          <div className={labelGroup}>
            <label htmlFor='phone'>Phone Number</label>
            {phoneInput.error && <span>{phoneInput.error}</span>}
          </div>
          <input
            autoComplete='off'
            name='phone'
            type='text'
            placeholder='+1234567890'
            className={phoneInput.error ? error : ''}
            onChange={phoneInput.onChange}
            onBlur={phoneInput.onBlur}
            value={phoneInput.value}
          />
        </div>
        <button className='btn btn-primary next-button' type='submit'>
          Next Step
        </button>
      </form>
    </div>
  )
}

export default Step1
