import { FC, memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'
import cls from './ProfilePage.module.scss'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
    children?: ReactNode
}

const ProfilePage: FC<ProfilePageProps> = memo((props: ProfilePageProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(cls['profile-page'], {}, [className])}
        {...otherProps}
      >
        <h1 className={classNames(cls['profile-text'], {}, [])}>{t('Страница профиля')}</h1>
      </div>
    </DynamicModuleLoader>
  )
})

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
