import { StateSchema } from '0_app/providers/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleComments?.error
