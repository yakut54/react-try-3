import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from '4_entities/Article/model/services/fetchArticleById/fetchArticleById'
import { ArticleDetailsSchema, ArticleSchema } from '4_entities/Article'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  error: undefined,
  isLoading: true,
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        if (state) {
          state.error = undefined
          state.isLoading = true
        }
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<ArticleSchema>) => {
        if (state) {
          state.data = action.payload
          state.isLoading = false
        }
      })
      .addCase(fetchArticleById.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice
