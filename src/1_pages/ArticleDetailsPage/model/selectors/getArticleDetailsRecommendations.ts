import { StateSchema } from '0_app/providers/StoreProvider'

export const getArticleDetailsRecommendationsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations.isLoading
}

export const getArticleDetailsRecommendationsError = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations.error
}
