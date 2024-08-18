import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'

export const ArticleDetailsPageAsync: LazyExoticComponent<
    JSXElementConstructor<{}>
> = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import(/* webpackChunkName: "ArticleDetailsPage" */'./ArticleDetailsPage'))
  }, 0)
}))
