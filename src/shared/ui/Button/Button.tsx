import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonVariant.OUTLINE,
    isSquare,
    size,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: isSquare,
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
}
