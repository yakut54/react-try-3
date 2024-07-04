/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <Button
        className={cls.links}
        theme={ButtonVariant.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('Войти')}
      </Button>

      <LoginModal
        isOpen={isOpenModal}
        onClose={onCloseModal}
      />
    </div>
  )
}
