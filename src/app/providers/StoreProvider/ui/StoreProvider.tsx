import type { FC, ReactNode } from 'react'
import type { ReducersMapObject } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { StateSchema } from '../config/StateSchema'
import { createAppStore } from '../config/store'

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props

  const navigate = useNavigate()

  const store = createAppStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
