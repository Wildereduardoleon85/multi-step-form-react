import styles from './input.module.css'
import { ChangeEvent } from 'react'

const { labelGroup, errorClassName } = styles

type InputProps = {
  name: string
  label: string
  error: string
  type: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  value: string
}

function Input({
  name,
  label,
  error,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
}: InputProps) {
  return (
    <div>
      <div className={labelGroup}>
        <label htmlFor={name}>{label}</label>
        {error && <span>{error}</span>}
      </div>
      <input
        autoComplete='off'
        name={name}
        type={type}
        placeholder={placeholder}
        className={error ? errorClassName : ''}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  )
}

export default Input
