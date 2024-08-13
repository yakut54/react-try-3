import { FC, ReactNode } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTextComponent.module.scss'

interface ArticleTextComponentProps {
    className?: string
    children?: ReactNode
}

export const ArticleTextComponent: FC<ArticleTextComponentProps> = (props: ArticleTextComponentProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['article-text-component'], {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
