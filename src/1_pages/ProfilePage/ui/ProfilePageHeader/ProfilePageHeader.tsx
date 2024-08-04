import { FC, useCallback } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Text, TextTheme } from '5_shared/ui/Text/Text'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileReadOnly, profileActions, updateProfileData } from '4_entities/Profile'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props: ProfilePageHeaderProps) => {
  const { className, ...otherProps } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const isReadOnly = useAppSelector(getProfileReadOnly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div
      className={classNames(cls['profile-page-header'], {}, [className])}
      {...otherProps}
    >
      <Text
        theme={TextTheme.NORMAl}
        title={t('Профиль')}
      />

      {
        isReadOnly
          ? (
            <Button
              className={cls['edit-btn']}
              theme={ButtonVariant.OUTLINE}
              onClick={onEdit}
            >
              {t('Редактировать')}
            </Button>
          )
          : (
            <>
              <Button
                className={cls['edit-btn']}
                theme={ButtonVariant.OUTLINE_RED}
                onClick={onCancelEdit}
              >
                {t('Отмена')}
              </Button>
              <Button
                className={cls['save-btn']}
                theme={ButtonVariant.OUTLINE}
                onClick={onSave}
              >
                {t('Сохранить')}
              </Button>
            </>
          )
      }

    </div>
  )
}
