import { FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { ArticleListItemSkeleton } from '4_entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleSchema, ArticleView } from '../../model/types/ArticleSchema'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: ArticleSchema[]
    isLoading?: boolean
    view?: ArticleView
}

const $getSkeletons = (view: ArticleView) => new Array(view === 'tile' ? 9 : 3)
  .fill(0)
  .map((item, idx) => (
    <ArticleListItemSkeleton key={idx} view={view} />
  ))

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = 'tile',
  } = props

  const renderArticle = (article: ArticleSchema) => (
    <ArticleListItem
      view={view}
      key={article.id}
      article={article}
    />
  )

  return (
    <div
      data-testid="article-list"
      className={classNames(cls['article-list'], {}, [className, cls[view]])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && $getSkeletons(view)}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
