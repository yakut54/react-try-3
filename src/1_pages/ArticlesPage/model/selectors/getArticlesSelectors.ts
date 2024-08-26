import { StateSchema } from '0_app/providers/StoreProvider'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || ''
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'tile'
