import { memo, useCallback } from 'react'
import { Card } from '5_shared/ui/Card/Card'
import { useTranslation } from 'react-i18next'
import { Input } from '5_shared/ui/Input/Input'
import { SortOrder } from '5_shared/types/SortOrder'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSwitcher,
} from '4_entities/Article'
import { useDebounce } from '5_shared/lib/hooks/useDebounce/useDebounce'
import { TabItem } from '5_shared/ui/Tabs/Tabs'
import { ArticleType } from '4_entities/Article/model/types/ArticleSchema'
import fetchArticlesList from '../../model/services/fetchArticlesList/fetchArticlesList'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../model/selectors/getArticlesSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import cls from './ArticlePageFilters.module.scss'

// eslint-disable-next-line no-unused-vars
interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const search = useAppSelector(getArticlesPageSearch)
  const order = useAppSelector(getArticlesPageOrder)
  const sort = useAppSelector(getArticlesPageSort)
  const type = useAppSelector(getArticlesPageType)

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

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlePageActions.setSearch(newSearch))
    dispatch(articlePageActions.setPage(1))
    debouncedFetchData()
  }, [debouncedFetchData, dispatch])

  const onChangeType = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(articlePageActions.setType(tab.value))
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
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
      </Card>

      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  )
})

ArticlePageFilters.displayName = 'ArticlePageFilters'
