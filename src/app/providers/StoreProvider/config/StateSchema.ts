/* eslint-disable no-unused-vars */
import type {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/AuthByUsername'
import type { ProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    // async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
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
    navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArgs
}
