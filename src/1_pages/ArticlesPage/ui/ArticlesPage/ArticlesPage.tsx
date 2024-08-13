import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className, ...otherProps } = props
  const { t } = useTranslation('article-details')

  return (
    <div
      className={classNames(cls['articles-page'], {}, [className])}
      {...otherProps}
    >
      <h1>{t('Страница со статьями')}</h1>

    </div>
  )
}

export default memo(ArticlesPage)
