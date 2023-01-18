import { forwardRef, LegacyRef, useEffect, useState } from 'react'
import { generateUUID } from '../../../utils/generateUUID'
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
    const [uuid, setUuid] = useState<string>('')

    useEffect(() => {
      setUuid(generateUUID())
    }, [])

    return (
      <>
        <label
          htmlFor={uuid}
          className={`${checkboxLabel} ${
            disablePointerEvents ? disablePointer : ''
          }`}
        >
          <input
            defaultChecked={defaultChecked}
            ref={ref}
            type='checkbox'
            id={uuid}
            className={checkboxInput}
          />
          <div className={checkboxBox}></div>
        </label>
      </>
    )
  }
)

export default Checkbox
