import {
  FC, memo, useCallback, useMemo,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select, SelectOption } from '5_shared/ui/Select/Select'
import { ArticleSortField } from '4_entities/Article/model/types/ArticleSchema'
import { SortOrder } from '5_shared/types/SortOrder'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    // eslint-disable-next-line no-unused-vars
    onChangeOrder: (order: SortOrder) => void
    // eslint-disable-next-line no-unused-vars
    onChangeSort: (sort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption[]>(() => [
    { value: 'asc', content: t('возрастанию') },
    { value: 'desc', content: t('убыванию') },
  ], [t])

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
    { value: 'views', content: t('просмотрам') },
    { value: 'title', content: t('названию') },
    { value: 'createdAt', content: t('дате создания') },
  ], [t])

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort])

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder])

  return (
    <div
      className={classNames(cls['article-sort-selector'], {}, [className])}
    >
      <Select
        value={sort}
        className={cls.mb}
        label={t('Сортировать ПО')}
        options={sortFieldOptions}
        onChange={changeSortHandler}
      />
      <Select
        value={order}
        label={t('ПО')}
        options={orderOptions}
        onChange={changeOrderHandler}
      />
    </div>
  )
})

ArticleSortSelector.displayName = 'ArticleSortSelector'
