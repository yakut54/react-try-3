/* eslint-disable no-unused-vars */
import type { ReducersMapObject } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '4_entities/Counter'
import { CombinedState, Reducer } from 'redux'
import { userReducer } from '4_entities/User'
import { uiReducer } from '3_features/UI'
import { $api } from '5_shared/api/api'
import type { StateSchema, ThunkExtraArgs } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createAppStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    UI: uiReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArgs = {
    api: $api,
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
export type AppDispatch = AppStore['dispatch']
