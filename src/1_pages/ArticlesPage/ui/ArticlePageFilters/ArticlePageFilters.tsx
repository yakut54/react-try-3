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
import fetchArticlesList from '1_pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from '../../model/selectors/getArticlesSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import cls from './ArticlePageFilters.module.scss'

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = memo((props: ArticlePageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const search = useAppSelector(getArticlesPageSearch)
  const order = useAppSelector(getArticlesPageOrder)
  const sort = useAppSelector(getArticlesPageSort)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlePageActions.setSearch(newSearch))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

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
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск')}
        />
      </Card>
    </div>
  )
})

ArticlePageFilters.displayName = 'ArticlePageFilters'
