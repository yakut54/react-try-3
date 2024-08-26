import { EntityState } from '@reduxjs/toolkit'
import type { ArticleSchema, ArticleView } from '4_entities/Article'

export interface ArticlesPageSchema extends EntityState<ArticleSchema> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    // pagination
    page: number
    limit?: number
    isMore: boolean
}
