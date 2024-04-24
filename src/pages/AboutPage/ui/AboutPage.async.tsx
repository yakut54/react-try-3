import { lazy, LazyExoticComponent, JSXElementConstructor } from 'react'

export const AboutPageAsync: LazyExoticComponent<JSXElementConstructor<{}>> = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import('./AboutPage'))
  }, 500)
}))
