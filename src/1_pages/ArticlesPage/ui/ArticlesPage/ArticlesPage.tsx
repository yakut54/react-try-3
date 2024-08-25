import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '4_entities/Article'
import { mockArticleData } from '4_entities/Article/model/mocks/mockArticleData'
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

      <ArticleList
        isLoading
        articles={new Array(10)
          .fill(0)
          .map((_, index) => ({
            ...mockArticleData,
            id: String(index + 1),
          }))}
        view="list"
      />

    </div>
  )
}

export default memo(ArticlesPage)
