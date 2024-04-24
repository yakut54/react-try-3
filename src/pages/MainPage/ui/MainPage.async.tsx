import { lazy, LazyExoticComponent, JSXElementConstructor } from 'react'

export const MainPageAsync: LazyExoticComponent<JSXElementConstructor<{}>> = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import('./MainPage'))
  }, 500)
}))
