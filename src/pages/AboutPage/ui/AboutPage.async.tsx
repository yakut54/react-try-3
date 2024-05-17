import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'

export const AboutPageAsync: LazyExoticComponent<JSXElementConstructor<{}>> = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import('./AboutPage'))
  }, 1000)
}))
