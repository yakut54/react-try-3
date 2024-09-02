import type { ReactNode } from 'react'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { StateSchema } from '../config/StateSchema'
import { createAppStore } from '../config/store'

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers,
}: StoreProviderProps) => {
  const inState = initialState as StateSchema
  const aReducers = asyncReducers as ReducersMapObject<StateSchema>
  const store = createAppStore(inState, aReducers)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
