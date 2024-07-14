import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'

export const AboutPageAsync: LazyExoticComponent<JSXElementConstructor<{}>> = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import(/* webpackChunkName: "AboutPage" */'./AboutPage'))
  }, 1000)
}))
