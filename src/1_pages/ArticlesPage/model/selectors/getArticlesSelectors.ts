import { StateSchema } from '0_app/providers/StoreProvider'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || ''
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'tile'
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageIsHasMore = (state: StateSchema) => state.articlesPage?.isMore
export const getArticlesPageIsInited = (state: StateSchema) => state.articlesPage?._isInited
