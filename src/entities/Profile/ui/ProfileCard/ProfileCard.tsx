import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
    children?: ReactNode
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation('profile')
  const data = useAppSelector(getProfileData)
  const error = useAppSelector(getProfileError)
  const isLoading = useAppSelector(getProfileIsLoading)

  return (
    <div
      className={classNames(cls['profile-card'], {}, [className])}
      {...otherProps}
    >
      <div className={cls.header}>
        <Text theme={TextTheme.NORMAl} title={t('Профиль')} />
        <Button
          className={cls['edit-btn']}
          theme={ButtonVariant.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
