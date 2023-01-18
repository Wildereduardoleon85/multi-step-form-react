import { useState, ChangeEvent } from 'react'
import { UseInput, Validation } from '../types'

type ValidateValue = (value: string) => Validation

export function useInput(validateValue: ValidateValue): UseInput {
  const [value, setValue] = useState<string>('')
  const [isTouched, setIsTouched] = useState<boolean>(false)

  const { isValid, error: validationError } = validateValue(value)
  const error = !isValid && isTouched ? validationError : ''

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function onBlur() {
    setIsTouched(true)
  }

  function reset() {
    setValue('')
    setIsTouched(false)
  }

  return {
    value,
    isValid,
    error,
    onChange,
    onBlur,
    reset,
  }
}
