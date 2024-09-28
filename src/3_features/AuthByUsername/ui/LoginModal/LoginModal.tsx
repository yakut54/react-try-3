import { FC, Suspense } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Modal } from '5_shared/ui/Modal/Modal'
import { LoginFormAsync } from '3_features/AuthByUsername/ui/LoginForm/LoginForm.async'
import { AppLoader } from '5_shared/ui/AppLoader/AppLoader'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    ...otherProps
  } = props

  return (
    <Modal
      className={classNames(cls['login-modal'], {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      {...otherProps}
    >
      <Suspense fallback={<AppLoader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
