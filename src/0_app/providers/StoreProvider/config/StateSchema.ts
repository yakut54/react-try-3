/* eslint-disable no-unused-vars */
import type {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import type { CounterSchema } from '4_entities/Counter'
import type { UserSchema } from '4_entities/User'
import type { LoginSchema } from '3_features/AuthByUsername'
import type { ProfileSchema } from '4_entities/Profile'
import { AxiosInstance } from 'axios'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'
import { ArticleDetailsSchema } from '4_entities/Article'

export interface StateSchema {
    user: UserSchema
    counter: CounterSchema
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
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
    state: StateSchema
}
