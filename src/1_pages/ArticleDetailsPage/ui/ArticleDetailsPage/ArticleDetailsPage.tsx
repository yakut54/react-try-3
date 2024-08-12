/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className, ...otherProps } = props
  const { t } = useTranslation()

  return (
    <div
      className={classNames(cls['article-details-page'], {}, [className])}
      {...otherProps}
    >
      ARTICLE DETAILS PAGE
    </div>
  )
}

export default memo(ArticleDetailsPage)
