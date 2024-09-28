import { ChangeEvent, useMemo } from 'react'
import { classNames, Mods } from '5_shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    isReadonly?: boolean
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    isReadonly,
    onChange,
  } = props

  const optionsList = useMemo(() => options
    ?.map(({ value, content }) => (
      <option
        className={cls.option}
        value={value}
        key={value}
      >
        {content}
      </option>
    )), [options])

  const mods: Mods = {}

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  return (
    <div
      className={classNames(cls['select-wrapper'], mods, [className])}
    >
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        disabled={isReadonly}
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
      >
        {optionsList}
      </select>
    </div>
  )
}

Select.displayName = 'Select'
