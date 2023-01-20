import { FormInputDefaultAttrs } from '../types'

export const form: FormInputDefaultAttrs[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'e.g John Doe',
    label: 'Name',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'jdoe@email.com',
    label: 'Email Address',
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: '+1234567890',
    label: 'Phone Number',
  },
]
