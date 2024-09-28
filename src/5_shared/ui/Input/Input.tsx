import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react'
import { classNames, Mods } from '5_shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type InputHTMLPropsWithout = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends InputHTMLPropsWithout {
    className?: string
    value?: string | number
    placeholder?: string
    autofocus?: boolean
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void
    isReadonly?: boolean
    isMb?: boolean
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    onChange,
    value,
    className,
    autofocus,
    placeholder,
    type = 'text',
    isReadonly,
    isMb,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlurHandler = () => {
    setIsFocused(false)
  }

  const onFocusHandler = () => {
    setIsFocused(true)
  }

  const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart || 0)
  }

  useEffect(() => {
    if (autofocus && ref.current) {
      setIsFocused(true)
      ref.current.focus()
    }
  }, [autofocus])

  const mods: Mods = {
    [cls.readonly]: isReadonly,
    [cls.mb]: isMb,
  }

  const isCaretVisible = isFocused && !isReadonly

  return (
    <div className={classNames(cls['input-wrapper'], mods, [className])}>

      {placeholder && (
        <div className={classNames(cls.placeholder)}>
          {`${placeholder}>`}
        </div>
      )}

      <div className={classNames(cls['caret-wrapper'])}>
        <input
          ref={ref}
          type={type}
          value={value}
          readOnly={isReadonly}
          placeholder={placeholder}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          onChange={onChangeHandler}
          onSelect={onSelectHandler}
          className={classNames(cls.input)}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            style={{ left: `${caretPosition}ch` }}
            className={classNames(cls.caret)}
          />
        )}
      </div>

    </div>
  )
})

Input.displayName = 'Input'
