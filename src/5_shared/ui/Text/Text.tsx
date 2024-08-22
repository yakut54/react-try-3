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

export enum TextSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl'
}

export enum TextMarginBottom {
    MB0 = 'margin-bottom-0',
    MB1 = 'margin-bottom-1',
    MB2 = 'margin-bottom-2',
    MB3 = 'margin-bottom-3',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    mb?: TextMarginBottom
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.NORMAl,
    align = TextAlign.LEFT,
    size = TextSize.M,
    mb = TextMarginBottom.MB1,
  } = props

  return (
    <div
      className={classNames(cls.text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
        cls[mb],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

Text.displayName = 'Text'
