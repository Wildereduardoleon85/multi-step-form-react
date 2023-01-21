import { forwardRef, LegacyRef, useEffect, useState } from 'react'
import { generateUUID } from '../../../utils'
import styles from './checkbox.module.css'

type CheckboxProps = {
  defaultChecked?: boolean
  disablePointerEvents?: boolean
}

const { checkboxLabel, checkboxInput, checkboxBox, disablePointer } = styles

const Checkbox = forwardRef(
  (
    { defaultChecked = false, disablePointerEvents = false }: CheckboxProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [id, setId] = useState<string>('')

    useEffect(() => {
      setId(generateUUID())
    }, [])

    return (
      <>
        <label
          htmlFor={id}
          className={`${checkboxLabel} ${
            disablePointerEvents ? disablePointer : ''
          }`}
        >
          <input
            defaultChecked={defaultChecked}
            ref={ref}
            type='checkbox'
            id={id}
            className={checkboxInput}
          />
          <div className={checkboxBox}></div>
        </label>
      </>
    )
  }
)

export default Checkbox
