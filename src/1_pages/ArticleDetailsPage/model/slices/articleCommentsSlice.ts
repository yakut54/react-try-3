import { StateSchema } from '0_app/providers/StoreProvider'
import { CommentSchema } from '4_entities/Comment'
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  fetchCommentsByArticleId,
} from '1_pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleCommentsSchema } from '../types/ArticleCommentSchema'

// Create Adapter
const articleCommentsAdapter = createEntityAdapter<CommentSchema>({
  selectId(comment) {
    console.log(comment)
    return comment.id
  }, // Надо поэкспериментировать
})

// articleCommentsAdapter.selectId = (comment) => {
//   console.log(comment)
//   return comment.id
// }

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || articleCommentsAdapter.getInitialState(),
)

const initialState: ArticleCommentsSchema = articleCommentsAdapter.getInitialState({
  ids: [],
  entities: {},
  error: undefined,
  isLoading: true,
})

// Selector
export const articleCommentsSlice = createSlice({
  name: 'articleCommentSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        if (state) {
          state.error = undefined
          state.isLoading = true
        }
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<CommentSchema[]>,
      ) => {
        if (state) {
          articleCommentsAdapter.setAll(state, action.payload)
          state.isLoading = false
        }
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleCommentReducer } = articleCommentsSlice
