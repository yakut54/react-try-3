import {
  FC, memo, useCallback, useEffect,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from '5_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
} from '4_entities/Profile'
import { Currency } from '4_entities/Currency'
import { Country } from '4_entities/Country'
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
  const dispatch = useAppDispatch()
  const form = useAppSelector(getProfileForm)
  const error = useAppSelector(getProfileError)
  const isLoading = useAppSelector(getProfileIsLoading)
  const isReadOnly = useAppSelector(getProfileReadOnly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) || 0 }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(cls['profile-page'], {}, [className])}
        {...otherProps}
      >
        <ProfilePageHeader />
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
      </div>
    </DynamicModuleLoader>
  )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
