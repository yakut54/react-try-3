import { FC, ReactNode } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleImageComponent.module.scss'

interface ArticleImageComponentProps {
    className?: string
    children?: ReactNode
}

export const ArticleImageComponent: FC<ArticleImageComponentProps> = (props: ArticleImageComponentProps) => {
  const { className, children, ...otherProps } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['article-image-component'], {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
