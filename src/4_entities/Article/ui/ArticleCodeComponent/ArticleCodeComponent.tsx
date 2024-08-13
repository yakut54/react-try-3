import { FC, ReactNode } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleCodeComponent.module.scss'

interface ArticleCodeComponentProps {
    className?: string
    children?: ReactNode
}

export const ArticleCodeComponent: FC<ArticleCodeComponentProps> = (props: ArticleCodeComponentProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['article-code-component'], {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
