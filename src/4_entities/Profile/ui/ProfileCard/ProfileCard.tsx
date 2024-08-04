/* eslint-disable no-unused-vars */
import { FC } from 'react'
import { Profile } from '4_entities/Profile'
import { classNames, Mods } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from '5_shared/ui/Input/Input'
import { AppLoader } from '5_shared/ui/AppLoader/AppLoader'
import { Text, TextAlign, TextTheme } from '5_shared/ui/Text/Text'
import { Avatar } from '5_shared/ui/Avatar/Avatar'
import { CurrencySelect } from '4_entities/Currency/ui/CurrencySelect/CurrencySelect'
import { Currency } from '4_entities/Currency'
import { Country, CountrySelect } from '4_entities/Country'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading: boolean
    error?: string
    isReadOnly?: boolean
    onChangeAge?: (name?: string) => void
    onChangeCity?: (name?: string) => void
    onChangeFirstName?: (name?: string) => void
    onChangeLastName?: (name?: string) => void
    onChangeUsername?: (name?: string) => void
    onChangeAvatar?: (name?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    isReadOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeUsername,
    onChangeAvatar,
    onChangeCity,
    onChangeAge,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div
        className={classNames(cls['profile-card'], {}, [className, cls.loading])}
      >
        <AppLoader />
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={classNames(cls['profile-card'], {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Обновите страницу')}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls['is-editing']]: !isReadOnly,
  }

  return (
    <div
      className={classNames(cls['profile-card'], mods, [className])}
    >
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls['avatar-wrapper']}>
            <Avatar src={data?.avatar} alt="" />
          </div>
        )}
        <Input
          isReadonly={isReadOnly}
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          onChange={onChangeFirstName}
        />
        <Input
          isReadonly={isReadOnly}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          onChange={onChangeLastName}
        />
        <Input
          isReadonly={isReadOnly}
          value={data?.age}
          type="number"
          placeholder={t('Ваш возраст')}
          className={cls.input}
          onChange={onChangeAge}
        />
        <Input
          isReadonly={isReadOnly}
          value={data?.city}
          placeholder={t('Город')}
          className={cls.input}
          onChange={onChangeCity}
        />
        <Input
          isReadonly={isReadOnly}
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={cls.input}
          onChange={onChangeUsername}
        />
        <Input
          isReadonly={isReadOnly}
          value={data?.avatar}
          placeholder={t('Ссылка на аватар')}
          className={cls.input}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          isReadonly={isReadOnly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          isReadonly={isReadOnly}
        />
      </div>
    </div>
  )
}
