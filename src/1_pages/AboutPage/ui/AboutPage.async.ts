import { lazy } from 'react'

export const AboutPageAsync = lazy(() => import(/* webpackChunkName: "AboutPage" */'./AboutPage'))
