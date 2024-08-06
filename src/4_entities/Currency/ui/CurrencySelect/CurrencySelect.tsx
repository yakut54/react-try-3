import { classNames, Mods } from '5_shared/lib/classNames/classNames'
import { Select, SelectOption } from '5_shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Currency } from '4_entities/Currency'
import cls from './CurrencySelect.module.scss'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: Currency) => void
    isReadonly?: boolean
}

const options: SelectOption[] = Object.values(Currency).map((currency) => ({
  value: currency,
  content: currency,
}))

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    isReadonly,
    onChange,
  } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  const mods: Mods = {
    [cls.readonly]: isReadonly,
  }

  return (
    <Select
      className={classNames('', mods, [className])}
      label={t('Укажите валюту')}
      options={options}
      value={value}
      isReadonly={isReadonly}
      onChange={onChangeHandler}
    />
  )
})
CurrencySelect.displayName = 'CurrencySelect'
