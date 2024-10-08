import { FC, memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Country } from '4_entities/Country'
import { Currency } from '4_entities/Currency'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from '5_shared/ui/Text/Text'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ValidateProfileError } from '4_entities/Profile/model/types/profileSchema'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from '4_entities/Profile'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { PageWrapper } from '2_widgets/PageWrapper/PageWrapper'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import cls from './ProfilePage.module.scss'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo((props: ProfilePageProps) => {
  const { className, ...otherProps } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const form = useAppSelector(getProfileForm)
  const error = useAppSelector(getProfileError)
  const isLoading = useAppSelector(getProfileIsLoading)
  const isReadOnly = useAppSelector(getProfileReadOnly)
  const validateErrors = useAppSelector(getProfileValidateErrors)

  const validateErrorsTranslates = {
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
  }

  const { id = '1' } = useParams<{ id: string }>()

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper
        className={classNames(cls['profile-page'], {}, [className])}
        {...otherProps}
      >
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text
            key={err + Math.random().toString()}
            theme={TextTheme.ERROR}
            text={validateErrorsTranslates[err]}
          />
        ))}
        <ProfileCard
          data={form}
          error={error}
          isLoading={isLoading}
          isReadOnly={isReadOnly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  )
})

ProfilePage.displayName = 'profile-page'

export default ProfilePage
