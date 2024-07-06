import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Text.module.scss'

interface TextProps {
    className?: string
    title?: string
    text?: string
    children?: ReactNode
}

export const Text: FC<TextProps> = (props: TextProps) => {
  const {
    className, children, text, title, ...otherProps
  } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls.text, {}, [className])}
      {...otherProps}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
