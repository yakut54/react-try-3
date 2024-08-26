import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema, ArticleView } from '4_entities/Article'
import { StateSchema } from '0_app/providers/StoreProvider'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '5_shared/const/localStorage'
import fetchArticlesList from '../services/fetchArticlesList'
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
    view: 'list',
    isMore: true,
    error: undefined,
    isLoading: false,
    page: 1,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      window.localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const view = window.localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === 'list' ? 4 : 18
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<ArticleSchema[]>) => {
        state.isLoading = false
        articleAdapter.addMany(state, action.payload)
        state.isMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  actions: articlePageActions,
  reducer: articlePageReducer,
} = articlePageSlice