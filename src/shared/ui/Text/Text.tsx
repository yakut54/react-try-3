/* eslint-disable no-unused-vars */
import { FC, memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    NORMAl = 'normal',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme: TextTheme
    children?: ReactNode
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className, children, text, title, theme = TextTheme.NORMAl, ...otherProps
  } = props

  return (
    <div
      className={classNames(cls.text, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

Text.displayName = 'Text'
