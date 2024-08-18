import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'
import { LoginModal } from '3_features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { getUserAuthData, userActions } from '4_entities/User'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextSize, TextTheme } from '5_shared/ui/Text/Text'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
  const dispatch = useAppDispatch()
  const authData = useAppSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsOpenAuthModal(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsOpenAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    setIsOpenAuthModal(false)
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>

        <Text
          title={authData.username}
          theme={TextTheme.NORMAl}
          size={TextSize.L}
          className={cls['user-name']}
        />

        <Button
          className={cls.links}
          theme={ButtonVariant.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <Button
        className={cls.links}
        theme={ButtonVariant.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('Войти')}
      </Button>

      {isOpenAuthModal && (
        <LoginModal
          isOpen={isOpenAuthModal}
          onClose={onCloseModal}
        />
      )}
    </div>
  )
})

Navbar.displayName = 'Navbar'
