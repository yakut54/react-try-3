import { StateSchema } from '0_app/providers/StoreProvider'

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments.isLoading
}
export const getArticleDetailsCommentsError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments.error
}
