import { JSXElementConstructor, lazy, LazyExoticComponent } from 'react'
import { ArticlesPageProps } from './ArticlesPage'

export const ArticlesPageAsync: LazyExoticComponent<JSXElementConstructor<ArticlesPageProps>> = lazy(
  () => import(
    /* webpackChunkName: "ArticlesPage" */
    './ArticlesPage'
  ),
)
