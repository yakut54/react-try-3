import type { EntityState } from '@reduxjs/toolkit'
import type { SortOrder } from '5_shared/types/SortOrder'
import type { ArticleSchema, ArticleView } from '4_entities/Article'
import { ArticleSortField, ArticleType } from '4_entities/Article'

export interface ArticlesPageSchema extends EntityState<ArticleSchema> {
    isLoading?: boolean
    error?: string
    // filter
    search: string,
    order: SortOrder
    type: ArticleType
    view: ArticleView
    sort: ArticleSortField
    // pagination
    page: number
    limit: number
    isMore: boolean
    // init
    _isInited: boolean
}
