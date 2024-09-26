import { FC, HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Text, TextSize } from '5_shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleSchema, ArticleView } from '../../model/types/ArticleSchema'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: ArticleSchema[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const $getSkeletons = (view: ArticleView) => new Array(view === 'tile' ? 9 : 3)
  .fill(0)
  .map((_, idx) => (
    <ArticleListItemSkeleton
      key={idx}
      view={view}
    />
  ))

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = 'tile',
    target,
  } = props
  const { t } = useTranslation('article-details')

  if (!isLoading && !articles.length) {
    return (
      <div
        data-testid="article-not-found"
        className={classNames(cls['article-list'], {}, [className, cls[view]])}
      >
        <Text
          size={TextSize.XL}
          title={t('Статьи не найдены')}
        />
      </div>
    )
  }

  return (
    <div
      data-testid="article-list"
      className={
        classNames(
          cls['article-list'],
          {},
          [className, cls[view], cls.mb],
        )
      }
    >
      {
        articles.length > 0
          ? articles.map((article: ArticleSchema) => (
            <ArticleListItem
              target={target}
              view={view}
              key={article.id}
              article={article}
            />
          ))
          : null
      }
      {
        isLoading && $getSkeletons(view)
      }
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
