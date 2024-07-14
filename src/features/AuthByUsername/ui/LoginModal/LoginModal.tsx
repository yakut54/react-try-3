import { FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
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
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
