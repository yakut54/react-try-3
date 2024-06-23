import {
  FC, MouseEvent, ReactNode, useEffect, useRef, useState,
} from 'react'
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

  const ANIMATION_DELAY = 300
  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  })

  const handleClose = () => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }

  const nahdleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls['is-closing']]: isClosing,
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
