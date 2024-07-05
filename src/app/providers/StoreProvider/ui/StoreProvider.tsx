import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'
import { configureAppStore } from '../config/store'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const { children, initialState } = props

  const store = configureAppStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
