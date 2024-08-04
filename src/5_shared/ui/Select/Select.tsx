import {
  ChangeEvent, FC, memo, useMemo,
} from 'react'
import { classNames, Mods } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Select.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    isReadonly?: boolean
    onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = memo(
  (props: SelectProps) => {
    const {
      className,
      label,
      options,
      value,
      isReadonly,
      onChange,
    } = props
    const { t } = useTranslation()

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
      onChange?.(e.target.value)
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
  },
)
Select.displayName = 'Select'
