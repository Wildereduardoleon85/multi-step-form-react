import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { StepContext } from '../../context/StepContext'
import { useInput, useMediaQuery } from '../../hooks'
import { UseInput } from '../../types'
import { validateEmail, validateName, validatePhone } from '../../utils'
import styles from './step1.module.css'
import Input from '../ui/Input'
import { getFormAttrs } from '../../helpers'
import Footer from '../ui/Footer'

const { step1Content } = styles

function Step1() {
  const { state, updateStep, setPersonalInfo } = useContext(StepContext)
  const { personalInfo } = state
  const { isMobile } = useMediaQuery()

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

    setPersonalInfo(formUpdatedValues)
    updateStep(2)
  }

  const formInputs = getFormAttrs(formValues)

  return (
    <div className={step1Content}>
      <h2 className='stepTitle'>Personal Info</h2>
      <p className='stepSubtitle'>
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={onSubmit}>
        {formInputs.map((formInputProps) => (
          <Input key={formInputProps.name} {...formInputProps} />
        ))}
        {isMobile ? (
          <Footer>
            <button className='btn btn-primary' type='submit'>
              Next Step
            </button>
          </Footer>
        ) : (
          <button className='btn btn-primary next-button desktop' type='submit'>
            Next Step
          </button>
        )}
      </form>
    </div>
  )
}

export default Step1
