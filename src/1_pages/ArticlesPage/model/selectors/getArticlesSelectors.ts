import { StateSchema } from '0_app/providers/StoreProvider'
import { ArticleType } from '4_entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading ?? false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error ?? ''
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? 'tile'
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit ?? 9
export const getArticlesPageIsHasMore = (state: StateSchema) => state.articlesPage?.isMore
export const getArticlesPageIsInited = (state: StateSchema) => state.articlesPage?._isInited
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? 'title'
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
