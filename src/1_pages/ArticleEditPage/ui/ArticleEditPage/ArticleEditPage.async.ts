import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(
  () => import(
    /* webpackChunkName: "ArticleEditPage" */
    './ArticleEditPage'
  ),
)
