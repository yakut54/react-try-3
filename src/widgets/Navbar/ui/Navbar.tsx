/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

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
}
