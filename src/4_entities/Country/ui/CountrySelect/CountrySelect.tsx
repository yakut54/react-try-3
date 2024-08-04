// import { classNames, Mods } from '5_shared/lib/classNames/classNames'
// import { Select, SelectOption } from '5_shared/ui/Select/Select'
// import { useTranslation } from 'react-i18next'
// import { memo, useCallback } from 'react'
// import { Country } from '4_entities/Country'
// import cls from './CountrySelect.module.scss'
//
// interface CountrySelectProps {
//     className?: string
//     value?: Country
//     // eslint-disable-next-line no-unused-vars
//     onChange?: (value: Country) => void
//     isReadonly?: boolean
// }
//
// const options: SelectOption[] = [
//   { value: Country.Russia, content: Country.Russia },
//   { value: Country.Belarus, content: Country.Belarus },
//   { value: Country.Ukraine, content: Country.Ukraine },
//   { value: Country.Kazakhstan, content: Country.Kazakhstan },
//   { value: Country.Armenia, content: Country.Armenia },
// ]
//
// export const CountrySelect = memo((props: CountrySelectProps) => {
//   const {
//     className,
//     value,
//     isReadonly,
//     onChange,
//   } = props
//   const { t } = useTranslation('profile')
//
//   const onChangeHandler = useCallback((value: string) => {
//     onChange?.(value as Country)
//   }, [onChange])
//
//   const mods: Mods = {
//     [cls.readonly]: isReadonly,
//   }
//
//   return (
//     <Select
//       className={classNames('', mods, [className])}
//       label={t('Укажите страну')}
//       options={options}
//       value={value}
//       isReadonly={isReadonly}
//       onChange={onChangeHandler}
//     />
//   )
// })
// CountrySelect.displayName = 'CountrySelect'

import { memo, useCallback } from 'react'
import { classNames, Mods } from '5_shared/lib/classNames/classNames'
import { Select, SelectOption } from '5_shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/countryTypes'
import cls from './CountrySelect.module.scss'

interface CountrySelectProps {
    className?: string
    value?: Country
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: Country) => void
    isReadonly?: boolean
}

const options: SelectOption[] = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    isReadonly,
  } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  const mods: Mods = {
    [cls.readonly]: isReadonly,
  }

  return (
    <Select
      className={classNames('', mods, [className])}
      label={t('Укажите страну')}
      options={options}
      value={value}
      isReadonly={isReadonly}
      onChange={onChangeHandler}
    />
  )
})
CountrySelect.displayName = 'CountrySelect'
