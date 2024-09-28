import { FC, memo } from 'react'
import { Card } from '5_shared/ui/Card/Card'
import { classNames } from '5_shared/lib/classNames/classNames'
import { Skeleton } from '5_shared/ui/Skeleton/Skeleton'
import { ArticleView } from '../../model/types/ArticleSchema'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view?: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view = 'tile',
  } = props

  if (view === 'list') {
    return (
      <div
        className={classNames(
          cls['article-list-item'],
          {},
          [className, cls[view]],
        )}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton height={50} width={50} borderRadius="50%" />
            <Skeleton height={16} width={150} className={cls.username} />
            <Skeleton height={16} width={150} className={cls.date} />
          </div>

          <Skeleton width={250} height={24} className={cls.title} />

          <Skeleton height={200} className={cls.img} />

          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(
        cls['article-list-item'],
        {},
        [className, cls[view]],
      )}
    >
      <Card className={cls.card}>
        <div className={cls['image-wrapper']}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls['info-wrapper']}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  )
})

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'
