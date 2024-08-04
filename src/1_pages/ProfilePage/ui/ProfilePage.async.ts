import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'

export const ProfilePageAsync: LazyExoticComponent<JSXElementConstructor<{}>> = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import(/* webpackChunkName: "ProfilePage" */'./ProfilePage'))
  }, 1000)
}))
