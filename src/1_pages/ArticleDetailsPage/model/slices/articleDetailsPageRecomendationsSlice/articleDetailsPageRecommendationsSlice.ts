import { StateSchema } from '0_app/providers/StoreProvider'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ArticleSchema } from '4_entities/Article'
import { ArticleDetailsRecommendationsSchema } from '../../types/ArticleDetailsRecommendationsSchema'
import fetchArticleRecommendations from '../../services/fetchArticleRecommendations/fetchArticleRecommendations'

// Create Adapter
const recommendationsAdapter = createEntityAdapter<ArticleSchema>()

recommendationsAdapter.selectId = (article) => article.id

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => {
    return state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
  },
)

export const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    ids: [],
    entities: {},
    error: undefined,
    isLoading: true,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        console.log('TEST pending')
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        action,
      ) => {
        console.log('TEST fulfilled')
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice
