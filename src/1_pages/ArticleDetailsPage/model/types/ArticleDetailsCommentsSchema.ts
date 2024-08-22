import { CommentSchema } from '4_entities/Comment/model/types/CommentSchema'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsCommentsSchema extends EntityState<CommentSchema> {
    isLoading?: boolean
    error?: string
}
