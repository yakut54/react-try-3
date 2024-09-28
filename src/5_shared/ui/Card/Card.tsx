/* eslint-disable no-unused-vars */
import {
  FC, HTMLAttributes, memo, ReactNode,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    theme?: CardTheme
}

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const {
    className, children, theme = CardTheme.NORMAL, ...otherProps
  } = props

  return (
    <div
      className={classNames(cls.card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'
