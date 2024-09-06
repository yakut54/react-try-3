import type { EntityState } from '@reduxjs/toolkit'
import type { SortOrder } from '5_shared/types/SortOrder'
import type { ArticleSchema, ArticleView } from '4_entities/Article'
import { ArticleSortField } from '4_entities/Article/model/types/ArticleSchema'

export interface ArticlesPageSchema extends EntityState<ArticleSchema> {
    isLoading?: boolean
    error?: string
    // filter
    order: SortOrder
    view: ArticleView
    sort: ArticleSortField
    search: string,
    // pagination
    page: number
    limit: number
    isMore: boolean
    // init
    _isInited: boolean
}
