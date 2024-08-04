/* eslint-disable no-unused-vars */
import {
  ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react'
import { classNames, Mods } from '5_shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonVariant {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonVariant
    isSquare?: boolean
    disabled?: boolean
    size?: ButtonSize
    children: ReactNode
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonVariant.OUTLINE,
    isSquare,
    disabled,
    size,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: isSquare,
    [cls.disabled]: disabled,
  }

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme], size && cls[size]])}
      {...otherProps}
    >
      {children}
    </button>

  )
})

Button.displayName = 'Button'
