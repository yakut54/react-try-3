import { EntityState } from '@reduxjs/toolkit'
import { ArticleSchema } from '4_entities/Article'

export interface ArticleDetailsRecommendationsSchema extends EntityState<ArticleSchema> {
    isLoading?: boolean
    error?: string
}
