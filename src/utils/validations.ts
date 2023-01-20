import { Validation } from '../types'

export function validateName(value: string): Validation {
  if (value.trim() === '') {
    return {
      isValid: false,
      error: 'This field is required',
    }
  }

  if (!/^[a-zA-Z ]+$/.test(value)) {
    return {
      isValid: false,
      error: 'This field must contain only letters',
    }
  }

  return {
    isValid: true,
    error: '',
  }
}

export function validateEmail(value: string): Validation {
  if (value.trim() === '') {
    return {
      isValid: false,
      error: 'This field is required',
    }
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return {
      isValid: false,
      error: 'You must enter a valid email',
    }
  }

  return {
    isValid: true,
    error: '',
  }
}

export function validatePhone(value: string): Validation {
  if (value.trim() === '') {
    return {
      isValid: false,
      error: 'This field is required',
    }
  }

  if (!value.trim().startsWith('+')) {
    return {
      isValid: false,
      error: 'The phone number must starts with a "+" sign',
    }
  }

  if (value.trim().length !== 11) {
    return {
      isValid: false,
      error: 'This field must be 10 characters length',
    }
  }

  if (!/^\d/.test(value.trim().split('+')[1])) {
    return {
      isValid: false,
      error: 'The phone number must only contains numbers',
    }
  }

  return {
    isValid: true,
    error: '',
  }
}
