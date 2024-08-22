import type { FC } from 'react'
import { useEffect } from 'react'
import type { Reducer } from '@reduxjs/toolkit'
import type { StateSchemaKey, StoreWithManager } from '0_app/providers/StoreProvider'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
    [reducerKey in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    removeAfterUnmount = true,
    reducers,
  } = props

  const store = useStore() as StoreWithManager
  const dispatch = useDispatch()

  const addReducers = () => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${reducerKey} reducer` })
    })
  }

  const removeReducers = () => {
    Object.entries(reducers).forEach(([reducerKey]) => {
      store.reducerManager.remove(reducerKey as StateSchemaKey)
      dispatch({ type: `@DESTROY ${reducerKey} reducer` })
    })
  }

  useEffect(() => {
    addReducers()

    return () => {
      if (removeAfterUnmount) {
        removeReducers()
      }
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
