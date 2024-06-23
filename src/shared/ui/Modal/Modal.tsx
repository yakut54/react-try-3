import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
}

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={classNames(cls.modal, {}, [className])}
      {...otherProps}
    >
      <div className={cls.overlay}>
        <div className={cls.content}>{children}</div>
      </div>
    </div>
  )
}
