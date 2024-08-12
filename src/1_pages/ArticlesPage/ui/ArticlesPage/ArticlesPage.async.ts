import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'

export const ArticlesPageAsync: LazyExoticComponent<JSXElementConstructor<{}>> = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import(/* webpackChunkName: "ArticlesPage" */'./ArticlesPage'))
  }, 1000)
}))
