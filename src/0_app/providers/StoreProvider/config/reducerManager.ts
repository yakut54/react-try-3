import type { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import type {
  MountedReducers, ReducerManager, StateSchema, StateSchemaKey,
} from './StateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: Array<StateSchemaKey> = []

  const mountedReducers: MountedReducers = {}

  return {
    getMountedReducers: () => mountedReducers,

    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      const newState = { ...state }

      if (keysToRemove.length > 0) {
        keysToRemove.forEach((key: StateSchemaKey) => {
          delete newState[key]
        })

        keysToRemove = []
      }

      return combinedReducer(newState, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      mountedReducers[key] = true
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      delete mountedReducers[key]
      combinedReducer = combineReducers(reducers)
    },
  }
}
