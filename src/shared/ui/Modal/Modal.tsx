import { useTheme } from 'app/providers/ThemeProvider'
import {
  FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    lazy,
    onClose,
    ...otherProps
  } = props

  const [isMounted, setIsMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

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

  const handleContentClick = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }

    setIsClosing(true)

    setTimeout(() => {
      setIsClosing(false)
    }, 0)

    return () => {
      setIsMounted(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current)
        window.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls['is-closing']]: isClosing,
  }

  if (!lazy && isMounted) {
    return (
      <Portal>
        <div
          className={classNames(cls.modal, mods, [className, theme, 'app-modal'])}
          {...otherProps}
        >
          <div className={cls.overlay} onClick={closeHandler}>
            <div className={cls.content} onClick={handleContentClick}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
  }
  return null
}
