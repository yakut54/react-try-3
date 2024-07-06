import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputHTMLProps {
    className?: string
    value?: string
    placeholder?: string
    autofocus?: boolean
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    onChange,
    value,
    className,
    autofocus,
    placeholder,
    type = 'text',
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

  return (
    <div className={classNames(cls['input-wrapper'], {}, [className])}>

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
          placeholder={placeholder}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          onChange={onChangeHandler}
          onSelect={onSelectHandler}
          className={classNames(cls.input)}
          {...otherProps}
        />
        {isFocused && (
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
