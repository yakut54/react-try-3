/* eslint-disable no-unused-vars */
import type { ReducersMapObject } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '4_entities/User'
import { counterReducer } from '4_entities/Counter'
import { $api } from '5_shared/api/api'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'
import { CombinedState, Reducer } from 'redux'
import { StateSchema, ThunkExtraArgs } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createAppStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArgs = {
    api: $api,
    navigate,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument: extraArg },
    }),
  })

  return { ...store, reducerManager }
}

export type AppStore = ReturnType<typeof createAppStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = ReturnType<typeof createAppStore>['dispatch']
