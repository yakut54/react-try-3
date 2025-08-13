import { lazy } from 'react'

export const TempPageAsync = lazy(
  () => import(/* webpackChunkName: "TempPage" */'./TempPage'),
)
