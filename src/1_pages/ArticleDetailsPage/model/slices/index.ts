import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice/articleDetailsCommentsSlice'
import {
  articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecomendationsSlice/articleDetailsPageRecommendationsSlice'
import type { ArticleDetailsPageSchema } from '../types'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecommendationsReducer,
})
