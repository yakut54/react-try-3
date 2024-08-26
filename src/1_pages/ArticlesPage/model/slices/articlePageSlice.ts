import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema, ArticleView } from '4_entities/Article'
import { StateSchema } from '0_app/providers/StoreProvider'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '5_shared/const/localStorage'
import getArticlesList from '../../model/services/getArticlesList'
import { ArticlesPageSchema } from '../types/ArticlesPageSchema'

const articleAdapter = createEntityAdapter<ArticleSchema>()
articleAdapter.selectId = (article: ArticleSchema) => article.id

export const getArticles = articleAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articleAdapter.getInitialState(),
)

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    error: undefined,
    isLoading: false,
    view: 'list',
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      window.localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload)
    },
    initState: (state) => {
      state.view = window.localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getArticlesList.fulfilled, (state, action: PayloadAction<ArticleSchema[]>) => {
        state.isLoading = false
        articleAdapter.setAll(state, action.payload)
      })
      .addCase(getArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  actions: articlePageActions,
  reducer: articlePageReducer,
} = articlePageSlice
