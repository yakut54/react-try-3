/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className, ...otherProps } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['articles-page'], {}, [className])}
      {...otherProps}
    >
      ARTICLES PAGES
    </div>
  )
}

export default memo(ArticlesPage)
