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
    removeAfterUnmount,
    reducers,
  } = props
  const store = useStore() as StoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${reducerKey} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey)
          dispatch({ type: `@DESTROY ${reducerKey} reducer` })
        })
      }
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
