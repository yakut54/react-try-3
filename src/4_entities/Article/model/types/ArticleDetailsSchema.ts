import { ArticleSchema } from './ArticleSchema'

export interface ArticleDetailsSchema {
    isLoading: boolean
    error?: string
    data?: ArticleSchema
}
