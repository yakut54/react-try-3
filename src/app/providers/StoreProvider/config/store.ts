import type { ReducersMapObject } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { counterReducer } from 'entities/Counter'
import type { StateSchema, StoreWithManager } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createAppStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  }) as StoreWithManager

  store.reducerManager = reducerManager

  return store
}
