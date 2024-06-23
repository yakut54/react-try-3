import {
  FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
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

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(
    () => {
      if (isOpen) {
        window.addEventListener('keydown', onKeyDown)
      }

      return () => {
        if (timeRef.current) {
          clearTimeout(timeRef.current)
          window.removeEventListener('keydown', onKeyDown)
        }
      }
    },
    [isOpen, onKeyDown],
  )

  const handleContentClick = (e: MouseEvent) => {
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
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={handleContentClick}>{children}</div>
      </div>
    </div>
  )
}
