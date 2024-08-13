import { createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  error: undefined,
  isLoading: true,
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice
