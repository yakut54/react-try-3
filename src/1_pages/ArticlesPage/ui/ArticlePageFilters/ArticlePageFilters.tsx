import { FC, memo, useCallback } from 'react'
import { Card } from '5_shared/ui/Card/Card'
import { useTranslation } from 'react-i18next'
import { Input } from '5_shared/ui/Input/Input'
import { SortOrder } from '5_shared/types/SortOrder'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSwitcher,
} from '4_entities/Article'
import { getArticlesPageOrder, getArticlesPageSort } from '../../model/selectors/getArticlesSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import cls from './ArticlePageFilters.module.scss'

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = memo((props: ArticlePageFiltersProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const order = useAppSelector(getArticlesPageOrder)
  const sort = useAppSelector(getArticlesPageSort)
  const { t } = useTranslation()

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder))
  }, [dispatch])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort))
  }, [dispatch])

  return (
    <div
      className={classNames(cls['article-page-filters'], {}, [className])}
    >
      <div className={cls['sort-wrapper']}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSwitcher
          onViewClick={onChangeView}
          view="tile"
        />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t('Поиск')} />
      </Card>
    </div>
  )
})

ArticlePageFilters.displayName = 'ArticlePageFilters'
