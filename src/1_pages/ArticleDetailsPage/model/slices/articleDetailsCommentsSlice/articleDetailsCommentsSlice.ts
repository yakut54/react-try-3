import { CommentSchema } from '4_entities/Comment'
import { StateSchema } from '0_app/providers/StoreProvider'
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema'

// Create Adapter
const articleCommentsAdapter = createEntityAdapter<CommentSchema>()

articleCommentsAdapter.selectId = (comment) => comment.id

export const getArticleComments = articleCommentsAdapter
  .getSelectors<StateSchema>((state) => state
    .articleDetailsPage?.comments || articleCommentsAdapter.getInitialState())

const initialState: ArticleDetailsCommentsSchema = articleCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
  ids: [],
  entities: {},
  error: undefined,
  isLoading: true,
})

export const articleDetailsCommentsSlice = createSlice({
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

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
