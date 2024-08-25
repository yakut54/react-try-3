import {
  FC, HTMLAttributes, memo, ReactNode,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={classNames(cls.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'
