/* eslint-disable no-unused-vars */
import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    NORMAl = 'normal',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.NORMAl,
    align = TextAlign.LEFT,
  } = props

  return (
    <div
      className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

Text.displayName = 'Text'
