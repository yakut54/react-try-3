/* eslint-disable no-unused-vars */
import type {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import type { AxiosInstance } from 'axios'
import type { To } from '@remix-run/router'
import type { UserSchema } from '4_entities/User'
import type { ProfileSchema } from '4_entities/Profile'
import type { CounterSchema } from '4_entities/Counter'
import type { LoginSchema } from '3_features/AuthByUsername'
import type { ArticleDetailsSchema } from '4_entities/Article'
import type { ArticlesPageSchema } from '1_pages/ArticlesPage'
import type { NavigateOptions } from 'react-router/dist/lib/context'
import type { AddCommentFormSchema } from '3_features/AddCommentForm'
import type { ArticleDetailsCommentsSchema } from '1_pages/ArticleDetailsPage'

export interface StateSchema {
    user: UserSchema
    counter: CounterSchema
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articlesPage?: ArticlesPageSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
}

export type StateSchemaKey = keyof StateSchema

export type ReducerManager = {
    remove: (key: StateSchemaKey) => void
    getReducerMap: () => ReducersMapObject<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
}

export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArgs,
    state: StateSchema,
}
