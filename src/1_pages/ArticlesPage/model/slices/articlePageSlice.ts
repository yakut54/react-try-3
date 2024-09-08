import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleSchema, ArticleView } from '4_entities/Article'
import { StateSchema } from '0_app/providers/StoreProvider'
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from '5_shared/const/localStorage'
import { SortOrder } from '5_shared/types/SortOrder'
import { ArticleSortField } from '4_entities/Article/model/types/ArticleSchema'
import fetchArticlesList from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageSchema } from '../types/ArticlesPageSchema'

const articleAdapter = createEntityAdapter<ArticleSchema>()
articleAdapter.selectId = (article: ArticleSchema) => article.id

export const getArticles = articleAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articleAdapter.getInitialState(),
)

const initialState = articleAdapter.getInitialState<ArticlesPageSchema>({
  ids: [],
  entities: {},
  view: 'list',
  isMore: true,
  error: undefined,
  isLoading: false,
  page: 1,
  _isInited: false,
  order: 'desc',
  limit: 18,
  sort: 'createdAt',
  search: '',
})

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState,
  reducers: {
    setView(state, action: PayloadAction<ArticleView>) {
      state.view = action.payload
      window.localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload)
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setOrder(state, action: PayloadAction<SortOrder>) {
      state.order = action.payload
    },
    setSort(state, action: PayloadAction<ArticleSortField>) {
      state.sort = action.payload
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    initState(state) {
      const view = window.localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === 'list' ? 3 : 9
      state._isInited = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined

        if (action.meta.arg.replace) {
          articleAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isMore = action.payload.length > 0

        if (action.meta.arg.replace) {
          articleAdapter.setAll(state, action.payload)
        } else {
          articleAdapter.addMany(state, action.payload)
        }
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
