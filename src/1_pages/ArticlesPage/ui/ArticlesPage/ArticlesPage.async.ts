import { lazy } from 'react'

export const ArticlesPageAsync = lazy(
  () => import(
    /* webpackChunkName: "ArticlesPage" */
    './ArticlesPage'
  ),
)
