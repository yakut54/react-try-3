import { FC, MouseEvent, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    ...otherProps
  } = props

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  const nahdleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }

  return (
    <div
      className={classNames(cls.modal, mods, [className])}
      {...otherProps}
    >
      <div className={cls.overlay} onClick={handleClose}>
        <div className={cls.content} onClick={nahdleContentClick}>{children}</div>
      </div>
    </div>
  )
}
