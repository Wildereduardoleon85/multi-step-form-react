import { form } from '../constants'
import {
  FormInputDefaultAttrs,
  FormInputDynamicAttrs,
  UseInput,
  FormAttrsByName,
} from '../types'

function getFormAttrsByName(inputs: UseInput[]): FormAttrsByName {
  const [nameInput, emailInput, phoneInput] = inputs

  return {
    name: {
      error: nameInput.error,
      onChange: nameInput.onChange,
      onBlur: nameInput.onBlur,
      value: nameInput.value,
    },
    email: {
      error: emailInput.error,
      onChange: emailInput.onChange,
      onBlur: emailInput.onBlur,
      value: emailInput.value,
    },
    phone: {
      error: phoneInput.error,
      onChange: phoneInput.onChange,
      onBlur: phoneInput.onBlur,
      value: phoneInput.value,
    },
  }
}

export function getFormAttrs(inputs: UseInput[]): FormInputDynamicAttrs[] {
  const formInputs = form.map((formInput: FormInputDefaultAttrs) => {
    const formAttrsByName: FormAttrsByName = getFormAttrsByName(inputs)
    return {
      ...formInput,
      error: formAttrsByName[formInput.name].error,
      onChange: formAttrsByName[formInput.name].onChange,
      onBlur: formAttrsByName[formInput.name].onBlur,
      value: formAttrsByName[formInput.name].value,
    }
  })

  return formInputs
}
